const { Persons } = require("../../config/repository")

module.exports = {

    findAll() {
        const people = Persons.findAll();
        console.log(people)
        return people
    },

    async save(person) {
        const new_person = await Persons.create({
            name: person.name,
            surname: person.surname,
            age: person.age,
            email: person.email
        })
        return new_person
    },

    async findById(personId) {
        const person = await Persons.findByPk(personId);
        return person;
    }

}

