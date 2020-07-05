package com.autam.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_document_request_process")
public class DocumentRequestProcess {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "id_person")
    private Person person;

    @ManyToOne
    @JoinColumn(name = "id_document_request_type")
    private DocumentRequestType documentRequestType;

    public DocumentRequestProcess() {

    }

    public DocumentRequestProcess(Person person, DocumentRequestType documentRequestType) {
        this.person = person;
        this.documentRequestType = documentRequestType;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public DocumentRequestType getDocumentRequestType() {
        return documentRequestType;
    }

    public void setDocumentRequestType(DocumentRequestType documentRequestType) {
        this.documentRequestType = documentRequestType;
    }
}