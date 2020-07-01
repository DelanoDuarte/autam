package com.autam.dto.request;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.autam.domain.Person;

public class MultipleDocumentRequestDTO implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    private String name;
    private List<Person> people = new ArrayList<>();

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

    public MultipleDocumentRequestDTO() {

    }

    public MultipleDocumentRequestDTO(String name, List<Person> people) {
        this.name = name;
        this.people = people;
    }

}