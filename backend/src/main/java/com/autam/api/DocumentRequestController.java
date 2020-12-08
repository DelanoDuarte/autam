package com.autam.api;

import java.util.Optional;

import com.autam.domain.DocumentRequest;
import com.autam.dto.request.MultipleDocumentRequestDTO;
import com.autam.dto.response.CreatedMultipleDocumentRequestDTO;
import com.autam.repository.DocumentRequestRepository;
import com.autam.service.DocumentRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/document-request")
public class DocumentRequestController extends BaseAPI<DocumentRequest, Long> {

    private DocumentRequestRepository documentRequestRepository;
    private DocumentRequestService documentRequestService;

    @Autowired
    public DocumentRequestController(final DocumentRequestRepository documentRequestRepository,
            final DocumentRequestService documentRequestService) {

        super(documentRequestRepository);
        this.documentRequestRepository = documentRequestRepository;
        this.documentRequestService = documentRequestService;
    }

    @PostMapping(value = "/multiple", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CreatedMultipleDocumentRequestDTO> createMultiple(@RequestBody MultipleDocumentRequestDTO docRequest) {
        try {
            Optional<CreatedMultipleDocumentRequestDTO> createdDocumentRequests = documentRequestService
                    .createMultipleDocumentsRequests(docRequest);

            if (createdDocumentRequests.isPresent())
                return ResponseEntity.ok(createdDocumentRequests.get());

        } catch (Exception e) {
            log.error("Error on create multiple document requests." + " Error: " + e.getMessage());
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
}