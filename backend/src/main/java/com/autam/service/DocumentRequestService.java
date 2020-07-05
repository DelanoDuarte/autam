package com.autam.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import com.autam.domain.DocumentRequest;
import com.autam.domain.DocumentRequestItem;
import com.autam.domain.Person;
import com.autam.dto.request.MultipleDocumentRequestDTO;
import com.autam.dto.response.CreatedMultipleDocumentRequestDTO;
import com.autam.repository.DocumentRequestRepository;
import com.autam.repository.PersonRepository;
import com.autam.validation.CustomMessageType;
import com.autam.validation.CustomMessageValidation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentRequestService {

    private final Logger logger = Logger.getLogger(DocumentRequestService.class.getSimpleName());

    private DocumentRequestRepository documentRequestRepository;
    private PersonRepository personRepository;

    @Autowired
    public DocumentRequestService(final DocumentRequestRepository documentRequestRepository,
            final PersonRepository personRepository) {

        this.documentRequestRepository = documentRequestRepository;
        this.personRepository = personRepository;
    }

    public Optional<CreatedMultipleDocumentRequestDTO> createMultipleDocumentsRequests(
            MultipleDocumentRequestDTO docRequest) {

        try {

            CreatedMultipleDocumentRequestDTO docRequestsCreated = new CreatedMultipleDocumentRequestDTO();
            List<DocumentRequest> documentsRequests = new ArrayList<>();
            Set<DocumentRequestItem> documentsRequestItems = new HashSet<>();

            List<Person> peopleAlreadySavedInDatabase = docRequest.getPeople().stream().filter(p -> p.getId() != null)
                    .collect(Collectors.toList());

            List<Person> newPeopleToSaveBeforeCreateRequest = docRequest.getPeople().stream()
                    .filter(p -> p.getId() == null).collect(Collectors.toList());

            if (!docRequest.getDocumentTypes().isEmpty()) {
                docRequest.getDocumentTypes().forEach(docT -> {
                    documentsRequestItems.add(new DocumentRequestItem(docT));
                });
            } else {
                docRequestsCreated.getMessages().add(new CustomMessageValidation(
                        "No Documents types was added to the request", CustomMessageType.WARNING));
            }

            if (!newPeopleToSaveBeforeCreateRequest.isEmpty()) {

                Optional<List<Person>> savedNewPeopleOfDocumentsRequets = Optional
                        .of(personRepository.saveAll(newPeopleToSaveBeforeCreateRequest));

                savedNewPeopleOfDocumentsRequets.ifPresent(newPeopleSaved -> {

                    peopleAlreadySavedInDatabase.addAll(newPeopleSaved);
                });
            }

            if (!peopleAlreadySavedInDatabase.isEmpty()) {

                peopleAlreadySavedInDatabase.forEach(personOfDocumentRequest -> {

                    DocumentRequest documentRequest = DocumentRequest.builder().withPerson(personOfDocumentRequest)
                            .withName(docRequest.getName()).withDocumentItems(documentsRequestItems).build();

                    documentsRequests.add(documentRequest);
                });

                if (!documentsRequests.isEmpty()) {

                    Optional<List<DocumentRequest>> createdDocRequests = Optional
                            .of(documentRequestRepository.saveAll(documentsRequests));

                    createdDocRequests.ifPresent(docsRequests -> {
                        docRequestsCreated.setDocumentRequests(docsRequests);
                    });
                }

            } else {
                docRequestsCreated.getMessages().add(
                        new CustomMessageValidation("No person was added to the request", CustomMessageType.WARNING));
            }
            return Optional.of(docRequestsCreated);
        } catch (Exception e) {
            logger.warning("Something bad happened on open multiple document requests" + e.getMessage());
        }
        return Optional.empty();
    }

}