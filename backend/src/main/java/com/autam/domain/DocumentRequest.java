package com.autam.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_document_request")
public class DocumentRequest extends AbstractEntity {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "id_person")
    private Person person;

    @Column(columnDefinition = "boolean default true")
    private boolean active;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "documentRequest")
    private Set<DocumentRequestItem> documentRequestItems = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "id_document_request_type")
    private DocumentRequestType documentRequestType;

    @ManyToOne
    @JoinColumn(name = "id_document_request_process")
    private DocumentRequestProcess documentRequestProcess;

    public DocumentRequest(String name, Person person, Set<DocumentRequestItem> documentRequestItems) {
        this.name = name;
        this.person = person;
        this.documentRequestItems = documentRequestItems;
    }

    public DocumentRequest(String name, Person person, Set<DocumentRequestItem> documentRequestItems,
            DocumentRequestType documentRequestType, DocumentRequestProcess documentRequestProcess) {
        this.name = name;
        this.person = person;
        this.documentRequestItems = documentRequestItems;
        this.documentRequestType = documentRequestType;
        this.documentRequestProcess = documentRequestProcess;
    }

    public DocumentRequest(String name, Person person) {
        this.name = name;
        this.person = person;
    }

    public DocumentRequest() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Set<DocumentRequestItem> getDocumentRequestItems() {
        return documentRequestItems;
    }

    public void setDocumentRequestItems(Set<DocumentRequestItem> documentRequestItems) {
        this.documentRequestItems = documentRequestItems;
    }

    public static DocumentRequestBuilder builder() {
        return new DocumentRequestBuilder();
    }

    public DocumentRequestProcess getDocumentRequestProcess() {
        return documentRequestProcess;
    }

    public void setDocumentRequestProcess(DocumentRequestProcess documentRequestProcess) {
        this.documentRequestProcess = documentRequestProcess;
    }

    public DocumentRequestType getDocumentRequestType() {
        return documentRequestType;
    }

    public void setDocumentRequestType(DocumentRequestType documentRequestType) {
        this.documentRequestType = documentRequestType;
    }

    public static class DocumentRequestBuilder extends DocumentRequest {

        /**
         *
         */
        private static final long serialVersionUID = 1L;

        public DocumentRequestBuilder withName(String name) {
            setName(name);
            return this;
        }

        public DocumentRequestBuilder withPerson(Person person) {
            setPerson(person);
            return this;
        }

        public DocumentRequestBuilder withDocumentItems(Set<DocumentRequestItem> documentRequestItems) {
            setDocumentRequestItems(documentRequestItems);
            return this;
        }

        public DocumentRequestBuilder addOneDocumentItem(DocumentRequestItem documentRequestItem) {
            getDocumentRequestItems().add(documentRequestItem);
            return this;
        }

        public DocumentRequestBuilder withDocumentRequestProcess(DocumentRequestProcess documentRequestProcess) {
            setDocumentRequestProcess(documentRequestProcess);
            return this;
        }

        public DocumentRequestBuilder withDocumentRequestType(DocumentRequestType documentRequestType) {
            setDocumentRequestType(documentRequestType);
            return this;
        }

        public DocumentRequest build() {
            return new DocumentRequest(getName(), getPerson(), getDocumentRequestItems(), getDocumentRequestType(),
                    getDocumentRequestProcess());
        }
    }
}