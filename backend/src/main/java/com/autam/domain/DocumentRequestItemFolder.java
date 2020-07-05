package com.autam.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tb_document_request_item_folder")
public class DocumentRequestItemFolder {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotNull
    private String name;

    @OneToMany(fetch = FetchType.LAZY)
    private List<DocumentRequestItem> documentRequestItems;

    @Column(columnDefinition = "boolean default true")
    private boolean active;

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

    public List<DocumentRequestItem> getDocumentRequestItems() {
        return documentRequestItems;
    }

    public void setDocumentRequestItems(List<DocumentRequestItem> documentRequestItems) {
        this.documentRequestItems = documentRequestItems;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

}