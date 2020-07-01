package com.autam.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_document_request_item")
public class DocumentRequestItem implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_document_type")
    private DocumentType documentType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_document_request")
    private DocumentRequest documentRequest;

    @Column(columnDefinition = "boolean default true")
    private boolean active;

    public static long getSerialversionuid() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public DocumentType getDocumentType() {
        return documentType;
    }

    public void setDocumentType(DocumentType documentType) {
        this.documentType = documentType;
    }

    public DocumentRequest getDocumentRequest() {
        return documentRequest;
    }

    public void setDocumentRequest(DocumentRequest documentRequest) {
        this.documentRequest = documentRequest;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

}