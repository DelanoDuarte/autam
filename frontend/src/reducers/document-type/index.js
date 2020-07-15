import { DOCUMENT_ACTIONS } from "../../actions/document-type"

const initialState = {
    documents: []
}

export const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENT_ACTIONS.ADD_DOCUMENT:
            const documents = state.documents
            const documentsTypes = action.payload
            if (documentsTypes.length > 0) {
                documentsTypes.forEach(d => {
                    if (!documents.some(doc => d.id === doc.id))
                        documents.push(d)
                });
            }
            return { ...state, documents: documents }
        default:
            return state
    }
}