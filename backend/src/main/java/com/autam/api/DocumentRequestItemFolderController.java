package com.autam.api;

import com.autam.domain.DocumentRequestItemFolder;
import com.autam.repository.DocumentRequestItemFolderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/document_request_item_folder")
public class DocumentRequestItemFolderController extends BaseAPI<DocumentRequestItemFolder, Long> {

    private DocumentRequestItemFolderRepository documentRequestItemFolderRepository;

    @Autowired
    public DocumentRequestItemFolderController(
            final DocumentRequestItemFolderRepository documentRequestItemFolderRepository) {
        super(documentRequestItemFolderRepository);
    }
}