package com.autam.api;

import com.autam.domain.DocumentTypeFolder;
import com.autam.repository.DocumentTypeFolderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/document-type-folder", produces = MediaType.APPLICATION_JSON_VALUE)
public class DocumentTypeFolderController extends BaseAPI<DocumentTypeFolder, Long> {

    private DocumentTypeFolderRepository documentTypeFolderRepository;

    @Autowired
    public DocumentTypeFolderController(final DocumentTypeFolderRepository documentTypeFolderRepository) {
        super(documentTypeFolderRepository);
    }

}