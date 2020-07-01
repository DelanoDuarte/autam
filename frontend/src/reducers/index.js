import { combineReducers } from "redux";
import { peopleReducer } from "./person";
import { documentReducer } from "./document-type";


export default combineReducers({
    people: peopleReducer,
    documents: documentReducer
})