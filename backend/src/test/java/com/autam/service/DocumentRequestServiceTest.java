package com.autam.service;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import com.autam.domain.DocumentRequest;
import com.autam.domain.Person;
import com.autam.dto.request.MultipleDocumentRequestDTO;
import com.autam.repository.DocumentRequestRepository;
import com.autam.repository.PersonRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
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
    public void should_saveMultipeDocumentRequestsWithPeopleNonSavedWithoutDocumentsItems() {

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

        MultipleDocumentRequestDTO documentRequestDTO = new MultipleDocumentRequestDTO("My Doc Request", persons);

        Optional<List<DocumentRequest>> documentsRequested = documentRequestService
                .openMultipleDocumentsRequests(documentRequestDTO);

        assertTrue(documentsRequested.isPresent());
        assertTrue(documentsRequested.get().size() == 2);
    }

}