package com.autam.domain;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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

    @NotNull
    @Column
    @Email
    private String email;

    @Column
    private int age;

    @Column(columnDefinition = "boolean default true")
    private boolean active;

    @Enumerated(EnumType.STRING)
    private PersonSex personSex;

    @Enumerated(EnumType.STRING)
    private PersonIdentificationType personIdentificationType;

    @Column
    private String phoneNumber;

    @ManyToOne
    @JoinColumn(name = "id_profession")
    private Profession profession;

    @Column
    private String identificationNumber;

    @Column
    private String socialSecurityNumber;

    @ManyToOne
    @JoinColumn(name = "id_country")
    private Country country;

    @ManyToOne
    @JoinColumn(name = "id_city")
    private City city;

    private Set<TemporaryUser> users;

    private CommonUser user;

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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public PersonSex getPersonSex() {
        return personSex;
    }

    public void setPersonSex(PersonSex personSex) {
        this.personSex = personSex;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getIdentificationNumber() {
        return identificationNumber;
    }

    public void setIdentificationNumber(String identificationNumber) {
        this.identificationNumber = identificationNumber;
    }

    public PersonIdentificationType getPersonIdentificationType() {
        return personIdentificationType;
    }

    public void setPersonIdentificationType(PersonIdentificationType personIdentificationType) {
        this.personIdentificationType = personIdentificationType;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Profession getProfession() {
        return profession;
    }

    public void setProfession(Profession profession) {
        this.profession = profession;
    }

    public String getSocialSecurityNumber() {
        return socialSecurityNumber;
    }

    public void setSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
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

        public PersonBuilder withSex(final PersonSex sex) {
            setPersonSex(sex);
            return this;
        }

        public Person build() {
            return new Person(this.getName(), this.getSurname(), this.getEmail(), this.getAge());
        }
    }
}