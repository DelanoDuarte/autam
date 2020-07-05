package com.autam.dto.request;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.autam.domain.DocumentType;
import com.autam.domain.Person;

public class MultipleDocumentRequestDTO implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @NotNull
    @NotBlank
    private String name;

    @NotNull
    private List<Person> people = new ArrayList<>();

    private List<DocumentType> documentTypes = new ArrayList<>();

    public MultipleDocumentRequestDTO() {

    }

    public MultipleDocumentRequestDTO(String name, List<Person> people) {
        this.name = name;
        this.people = people;
    }

    public MultipleDocumentRequestDTO(String name, List<Person> people, List<DocumentType> documentTypes) {
        this.name = name;
        this.people = people;
        this.documentTypes = documentTypes;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Person> getPeople() {
        return people;
    }

    public void setPeople(List<Person> people) {
        this.people = people;
    }

    public List<DocumentType> getDocumentTypes() {
        return documentTypes;
    }

    public void setDocumentTypes(List<DocumentType> documentTypes) {
        this.documentTypes = documentTypes;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((documentTypes == null) ? 0 : documentTypes.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((people == null) ? 0 : people.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        MultipleDocumentRequestDTO other = (MultipleDocumentRequestDTO) obj;
        if (documentTypes == null) {
            if (other.documentTypes != null)
                return false;
        } else if (!documentTypes.equals(other.documentTypes))
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (people == null) {
            if (other.people != null)
                return false;
        } else if (!people.equals(other.people))
            return false;
        return true;
    }

}