package com.autam.api;

import com.autam.domain.DocumentRequest;
import com.autam.repository.DocumentRequestRepository;
import com.autam.service.DocumentRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}