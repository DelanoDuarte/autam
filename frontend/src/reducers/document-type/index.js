import { DOCUMENT_ACTIONS } from "../../actions/document-type"

const initialState = {
    documents: []
}

export const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENT_ACTIONS.ADD_DOCUMENT:
            let doc_list = state.documents
            doc_list.push(action.payload)
            return { ...state, documents: doc_list }
        default:
            return state
    }
}