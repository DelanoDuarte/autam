package com.autam.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import com.autam.domain.DocumentRequest;
import com.autam.domain.Person;
import com.autam.dto.request.MultipleDocumentRequestDTO;
import com.autam.repository.DocumentRequestRepository;
import com.autam.repository.PersonRepository;

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

    public Optional<List<DocumentRequest>> openMultipleDocumentsRequests(MultipleDocumentRequestDTO docRequest) {

        try {

            List<DocumentRequest> documentsRequests = new ArrayList<>();

            List<Person> peopleAlreadySavedInDatabase = docRequest.getPeople().stream().filter(p -> p.getId() != null)
                    .collect(Collectors.toList());

            List<Person> newPeopleToSaveBeforeCreateRequest = docRequest.getPeople().stream()
                    .filter(p -> p.getId() == null).collect(Collectors.toList());

            if (!newPeopleToSaveBeforeCreateRequest.isEmpty()) {

                Optional<List<Person>> savedNewPeopleOfDocumentsRequets = Optional
                        .of(personRepository.saveAll(newPeopleToSaveBeforeCreateRequest));

                savedNewPeopleOfDocumentsRequets.ifPresent(newPeopleSaved -> {

                    peopleAlreadySavedInDatabase.addAll(newPeopleSaved);
                });
            }

            peopleAlreadySavedInDatabase.forEach(personOfDocumentRequest -> {

                DocumentRequest documentRequest = DocumentRequest.builder().withPerson(personOfDocumentRequest)
                        .withName(docRequest.getName()).build();

                documentsRequests.add(documentRequest);
            });

            if (!documentsRequests.isEmpty()) {

                documentRequestRepository.saveAll(documentsRequests);
            }

            return Optional.of(documentsRequests);
        } catch (Exception e) {
            logger.warning("Something bad happened on open multiple document requests" + e.getMessage());
        }
        return Optional.empty();
    }

}