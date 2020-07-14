package com.autam.api;

import java.util.Optional;

import com.autam.domain.DocumentRequestProcess;
import com.autam.repository.DocumentRequestProcessRepository;
import com.autam.service.DocumentRequestProcessService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/document_request_process")
public class DocumentRequestProcessController extends BaseAPI<DocumentRequestProcess, Long> {

    private DocumentRequestProcessRepository documentRequestProcessRepository;

    private DocumentRequestProcessService documentRequestProcessService;

    @Autowired
    public DocumentRequestProcessController(final DocumentRequestProcessRepository documentRequestProcessRepository,
            final DocumentRequestProcessService documentRequestProcessService) {

        super(documentRequestProcessRepository);
        this.documentRequestProcessRepository = documentRequestProcessRepository;
        this.documentRequestProcessService = documentRequestProcessService;
    }

    @Override
    public ResponseEntity<DocumentRequestProcess> create(DocumentRequestProcess t) {
        try {
            Optional<DocumentRequestProcess> docReqProcess = documentRequestProcessService
                    .createNewDocumentRequestProcess(t);

            if (docReqProcess.isPresent())
                return ResponseEntity.ok(docReqProcess.get());
        } catch (Exception e) {
            log.error("Error on create a new document request process: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}