import { combineReducers } from "redux";
import { peopleReducer } from "./person";


export default combineReducers({
    people: peopleReducer
})