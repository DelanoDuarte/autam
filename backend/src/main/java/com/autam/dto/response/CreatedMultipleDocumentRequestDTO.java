package com.autam.dto.response;

import java.util.ArrayList;
import java.util.List;

import com.autam.domain.DocumentRequest;

public class CreatedMultipleDocumentRequestDTO extends CustomResult {

    private List<DocumentRequest> documentRequests = new ArrayList<>();

    public CreatedMultipleDocumentRequestDTO() {

    }

    public CreatedMultipleDocumentRequestDTO(List<DocumentRequest> documentRequests) {
        this.documentRequests = documentRequests;
    }

    public List<DocumentRequest> getDocumentRequests() {
        return documentRequests;
    }

    public void setDocumentRequests(List<DocumentRequest> documentRequests) {
        this.documentRequests = documentRequests;
    }

}