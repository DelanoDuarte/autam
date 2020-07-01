package com.autam.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

/**
 * Person
 */

@Entity
@Table(name = "tb_person")
public class Person implements Serializable {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column
    private String name;

    @NotNull
    @Column
    private String surname;

    @Column
    @Email
    private String email;

    @Column
    private int age;

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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Person(@NotNull String name, @NotNull String surname, @Email String email, int age) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.age = age;
    }

    public Person() {

    }

    public static PersonBuilder builder() {
        return new PersonBuilder();
    }

    public static class PersonBuilder extends Person {

        /**
         *
         */
        private static final long serialVersionUID = 1L;

        public PersonBuilder withName(final String name) {
            setName(name);
            return this;
        }

        public PersonBuilder withSurname(final String surname) {
            setSurname(surname);
            return this;
        }

        public PersonBuilder withEmail(final String email) {
            setEmail(email);
            return this;
        }

        public PersonBuilder withAge(final int age) {
            setAge(age);
            return this;
        }

        public Person build() {
            return new Person(this.getName(), this.getSurname(), this.getEmail(), this.getAge());
        }
    }
}