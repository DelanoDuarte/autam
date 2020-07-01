export const PEOPLE_ACTIONS = {
    ADD_PERSON: "ADD_PERSON",
    COUNT_PEOPLE: "COUNT_PEOPLE"
}

export const addPerson = (person) => ({
    type: PEOPLE_ACTIONS.ADD_PERSON,
    payload: person
})


