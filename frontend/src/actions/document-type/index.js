export const DOCUMENT_ACTIONS = {
    ADD_DOCUMENT: "ADD_DOCUMENT"
}

export const addDocument = (documents) => ({
    type: DOCUMENT_ACTIONS.ADD_DOCUMENT,
    payload: documents
})


