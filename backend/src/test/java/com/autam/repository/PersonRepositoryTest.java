package com.autam.repository;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import com.autam.domain.Person;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class PersonRepositoryTest {

    @Autowired
    private PersonRepository personRepository;

    @Test
    public void should_findExistingPersonSaved() {
        Person person = Person.builder().withName("Jamal").withSurname("Jones").withEmail("jjones@email.com")
                .withAge(38).build();

        Person savedPerson = personRepository.saveAndFlush(person);

        Optional<Person> existingPerson = personRepository.findById(savedPerson.getId());
        assertTrue(existingPerson.isPresent());
    }

    @Test
    public void should_saveANewPersonOnDatabase() {
        Person person = Person.builder().withName("James").withSurname("Jones").withEmail("jjones@email.com")
                .withAge(46).build();

        Person savedPerson = personRepository.saveAndFlush(person);

        assertTrue(savedPerson.getName().equalsIgnoreCase(person.getName()));
        assertTrue(savedPerson.getSurname().equalsIgnoreCase(person.getSurname()));
    }
}