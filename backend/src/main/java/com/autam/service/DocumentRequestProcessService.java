package com.autam.service;

import java.util.Optional;

import com.autam.domain.DocumentRequestProcess;
import com.autam.repository.DocumentRequestProcessRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentRequestProcessService {

    private DocumentRequestProcessRepository documentRequestProcessRepository;

    @Autowired
    public DocumentRequestProcessService(final DocumentRequestProcessRepository documentRequestProcessRepository) {
        this.documentRequestProcessRepository = documentRequestProcessRepository;
    }

    public Optional<DocumentRequestProcess> createNewDocumentRequestProcess(
            DocumentRequestProcess documentRequestProcess) {
        try {
            Optional<DocumentRequestProcess> createdDocumentRequestProcess = Optional
                    .of(documentRequestProcessRepository.save(documentRequestProcess));

            if (createdDocumentRequestProcess.isPresent())
                return createdDocumentRequestProcess;
        } catch (Exception e) {

        }
        return Optional.empty();
    }
}