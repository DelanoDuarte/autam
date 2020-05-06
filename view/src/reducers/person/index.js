import { PEOPLE_ACTIONS } from "../../actions/persons";

const initialState = {
    people: [],
    people_count: 0
}

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case PEOPLE_ACTIONS.ADD_PERSON:
            let people_list = state.people
            people_list.push(action.payload)
            return { ...state, people: people_list }
        case PEOPLE_ACTIONS.COUNT_PEOPLE:
            return { ...state, people_count: state.people.length };
        default:
            return state
    }
}