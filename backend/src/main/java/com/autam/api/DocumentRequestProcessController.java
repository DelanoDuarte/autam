package com.autam.api;

import java.util.List;
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
public class DocumentRequestProcessController implements IBaseApi<DocumentRequestProcess, Long> {

    private DocumentRequestProcessRepository documentRequestProcessRepository;

    private DocumentRequestProcessService documentRequestProcessService;

    @Autowired
    public DocumentRequestProcessController(final DocumentRequestProcessRepository documentRequestProcessRepository,
            final DocumentRequestProcessService documentRequestProcessService) {
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

    @Override
    public ResponseEntity<List<DocumentRequestProcess>> findAll() {
        try {
            Optional<List<DocumentRequestProcess>> all = Optional.of(documentRequestProcessRepository.findAll());

            if (all.isPresent())
                return ResponseEntity.ok(all.get());
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            log.error("Error on find all documents requests process: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @Override
    public ResponseEntity<DocumentRequestProcess> findOneById(Long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseEntity<?> deleteById(Long id) {
        // TODO Auto-generated method stub
        return null;
    }
}