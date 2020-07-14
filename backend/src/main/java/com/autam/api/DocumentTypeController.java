package com.autam.api;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import javax.validation.constraints.NotNull;

import com.autam.domain.DocumentType;
import com.autam.repository.DocumentTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/document-type", produces = MediaType.APPLICATION_JSON_VALUE)
public class DocumentTypeController {

    private static Logger log = Logger.getLogger(DocumentTypeController.class.getSimpleName());

    private DocumentTypeRepository documentTypeRepository;

    @Autowired
    public DocumentTypeController(final DocumentTypeRepository documentTypeRepository) {
        this.documentTypeRepository = documentTypeRepository;
    }

    @GetMapping
    public ResponseEntity<List<DocumentType>> findAll() {
        try {
            Optional<List<DocumentType>> docTypes = Optional.of(documentTypeRepository.findAll());

            if (docTypes.isPresent())
                return ResponseEntity.ok(docTypes.get());
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            log.warning("something bad happened at find all document types: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @PostMapping
    public ResponseEntity<DocumentType> create(@RequestBody DocumentType documentType) {
        try {
            Optional<DocumentType> docType = Optional.of(documentTypeRepository.save(documentType));
            if (docType.isPresent())
                return ResponseEntity.ok(docType.get());
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            log.warning("something bad happened at create an document type: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DocumentType> findOneById(@PathVariable("id") @NotNull Long id) {
        try {
            Optional<DocumentType> docType = documentTypeRepository.findById(id);
            if (docType.isPresent())
                return ResponseEntity.ok(docType.get());
            else
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            log.warning("something bad happened at create an document type: " + e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}