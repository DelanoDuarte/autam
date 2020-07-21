package com.autam.api;

import com.autam.domain.DocumentRequestType;
import com.autam.repository.DocumentRequestTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/document-request-type")
public class DocumentRequestTypeController extends BaseAPI<DocumentRequestType, Long> {

    private DocumentRequestTypeRepository documentRequestTypeRepository;

    @Autowired
    public DocumentRequestTypeController(final DocumentRequestTypeRepository documentRequestTypeRepository) {
        super(documentRequestTypeRepository);
    }

}