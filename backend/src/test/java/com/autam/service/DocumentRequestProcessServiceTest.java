package com.autam.service;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import com.autam.domain.DocumentRequestProcess;
import com.autam.domain.DocumentRequestType;
import com.autam.domain.Person;
import com.autam.domain.PersonSex;
import com.autam.repository.DocumentRequestProcessRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
public class DocumentRequestProcessServiceTest {

        @Mock
        private DocumentRequestProcessRepository documentRequestProcessRepository;

        @InjectMocks
        private DocumentRequestProcessService documentRequestProcessService;

        @Before
        public void init() {
                this.documentRequestProcessService = new DocumentRequestProcessService(
                                documentRequestProcessRepository);
        }

        @Test
        public void should_createANewDocumentRequestProcess() {

                Person newPerson = Person.builder().withName("James").withSurname("Jones").withAge(39)
                                .withEmail("jjones@email.com").withSex(PersonSex.MALE).build();

                newPerson.setId(1L);

                DocumentRequestType documentRequestType = new DocumentRequestType(1L, "Work Visa");
                DocumentRequestProcess documentRequestProcess = new DocumentRequestProcess(null ,newPerson,
                                documentRequestType);

                DocumentRequestProcess documentRequestProcessResponse = new DocumentRequestProcess(1L, newPerson,
                                documentRequestType);

                when(documentRequestProcessRepository.save(documentRequestProcess))
                                .thenReturn(documentRequestProcessResponse);

                Optional<DocumentRequestProcess> createdDocumentRequestProcess = documentRequestProcessService
                                .createNewDocumentRequestProcess(documentRequestProcess);

                assertTrue(createdDocumentRequestProcess.isPresent());
        }
}