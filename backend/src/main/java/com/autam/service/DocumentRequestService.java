package com.autam.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import com.autam.domain.DocumentRequest;
import com.autam.domain.DocumentRequestItem;
import com.autam.domain.Person;
import com.autam.domain.TemporaryUser;
import com.autam.dto.request.MultipleDocumentRequestDTO;
import com.autam.dto.response.CreatedMultipleDocumentRequestDTO;
import com.autam.repository.DocumentRequestRepository;
import com.autam.repository.PersonRepository;
import com.autam.repository.TemporaryUserRepository;
import com.autam.validation.CustomMessageType;
import com.autam.validation.CustomMessageValidation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import net.bytebuddy.utility.RandomString;

@Slf4j
@Service
public class DocumentRequestService {

    private DocumentRequestRepository documentRequestRepository;
    private PersonRepository personRepository;
    private TemporaryUserRepository temporaryUserRepository;

    @Autowired
    public DocumentRequestService(final DocumentRequestRepository documentRequestRepository,
            final PersonRepository personRepository,
            final TemporaryUserRepository temporaryUserRepository) {

        this.documentRequestRepository = documentRequestRepository;
        this.personRepository = personRepository;
        this.temporaryUserRepository = temporaryUserRepository;
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

                savedNewPeopleOfDocumentsRequets.ifPresent(newPeopleSaved -> peopleAlreadySavedInDatabase.addAll(newPeopleSaved));
            }

            mapPeopleAndGeneratePeopleTemporaryUser(docRequest, docRequestsCreated, documentsRequests, documentsRequestItems,
                    peopleAlreadySavedInDatabase);
            return Optional.of(docRequestsCreated);
        } catch (Exception e) {
            log.error("Something bad happened on open multiple document requests" + e.getMessage());
        }
        return Optional.empty();
    }

    private void mapPeopleAndGeneratePeopleTemporaryUser(MultipleDocumentRequestDTO docRequest, CreatedMultipleDocumentRequestDTO docRequestsCreated,
            List<DocumentRequest> documentsRequests, Set<DocumentRequestItem> documentsRequestItems,
            List<Person> peopleAlreadySavedInDatabase) {
        if (!peopleAlreadySavedInDatabase.isEmpty()) {

            this.generateTempraryUsersFromPeopleOfDocumentRequest(peopleAlreadySavedInDatabase);

            peopleAlreadySavedInDatabase.forEach(personOfDocumentRequest -> {

                DocumentRequest documentRequest = DocumentRequest.builder()
                        .withPerson(personOfDocumentRequest)
                        .withName(docRequest.getName())
                        .withDocumentItems(documentsRequestItems)
                        .withDocumentRequestType(docRequest.getDocumentRequestType())
                        .build();

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
    }

    public void generateTempraryUsersFromPeopleOfDocumentRequest(List<Person> people) {
        people.forEach(person -> {

            TemporaryUser temporaryUser = new TemporaryUser();
            temporaryUser.setTemporary(true);
            temporaryUser.setEmail(person.getEmail());
            temporaryUser.setPassword(RandomString.make(8)); //TODO: Refact to hash password.
            temporaryUser.setStartDate(LocalDateTime.now());
            temporaryUser.setEndDate(LocalDateTime.now().plusMonths(1));
            temporaryUser.setPerson(person);
            temporaryUserRepository.save(temporaryUser);
        });
    }

}