package com.autam.service;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.autam.domain.DocumentRequest;
import com.autam.domain.Person;
import com.autam.dto.request.MultipleDocumentRequestDTO;
import com.autam.dto.response.CreatedMultipleDocumentRequestDTO;
import com.autam.repository.DocumentRequestRepository;
import com.autam.repository.PersonRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class DocumentRequestServiceTest {

        @Mock
        private DocumentRequestRepository documentRequestRepository;

        @Mock
        private PersonRepository personRepository;

        private DocumentRequestService documentRequestService;

        @Before
        public void init() {
                this.documentRequestService = new DocumentRequestService(documentRequestRepository, personRepository);
        }

        @Test
        public void should_createMultipeDocumentRequestsWithPeopleNonSavedWithoutDocumentsItems() {

                Person firstPerson = Person.builder().withName("James").withSurname("Jones").withAge(36)
                                .withEmail("jjones@email.com").build();
                Person secondPerson = Person.builder().withName("Jamal").withSurname("Jones").withAge(36)
                                .withEmail("jajones@email.com").build();

                List<Person> persons = Arrays.asList(firstPerson, secondPerson);

                Person savedFirstPerson = firstPerson;
                Person savedSecondPerson = secondPerson;

                savedFirstPerson.setId(1L);
                savedSecondPerson.setId(2L);

                List<Person> savedPeople = Arrays.asList(savedFirstPerson, savedSecondPerson);
                when(personRepository.saveAll(persons)).thenReturn(savedPeople);

                DocumentRequest documentRequest1 = new DocumentRequest("Test", savedFirstPerson);
                DocumentRequest documentRequest2 = new DocumentRequest("Test", savedSecondPerson);

                DocumentRequest documentRequest1Saved = documentRequest1;
                documentRequest1Saved.setId(1L);
                DocumentRequest documentRequest2Saved = documentRequest2;
                documentRequest2.setId(2L);

                when(documentRequestRepository.saveAll(Mockito.anyList()))
                                .thenReturn(Arrays.asList(documentRequest1Saved, documentRequest2Saved));

                MultipleDocumentRequestDTO documentRequestDTO = new MultipleDocumentRequestDTO("My Doc Request",
                                persons);

                Optional<CreatedMultipleDocumentRequestDTO> documentsRequested = documentRequestService
                                .createMultipleDocumentsRequests(documentRequestDTO);

                assertTrue(documentsRequested.isPresent());
                assertTrue(documentsRequested.get().getDocumentRequests().size() == 2);
        }

        @Test
        public void should_returnWarningMessageOnCreateMultipeDocumentRequestsBecauseNoPeopleWasAdded() {

                MultipleDocumentRequestDTO documentRequestDTO = new MultipleDocumentRequestDTO("My Doc Request",
                                Mockito.anyList());

                Optional<CreatedMultipleDocumentRequestDTO> documentsRequested = documentRequestService
                                .createMultipleDocumentsRequests(documentRequestDTO);

                assertTrue(documentsRequested.isPresent());
                assertTrue(documentsRequested.get().hasAnyWarning());
                assertTrue(documentsRequested.get().getMessages().size() == 1);
        }

}