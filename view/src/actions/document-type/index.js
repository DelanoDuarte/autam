export const DOCUMENT_ACTIONS = {
    ADD_DOCUMENT: "ADD_DOCUMENT"
}

export const addDocument = (document) => ({
    type: DOCUMENT_ACTIONS.ADD_DOCUMENT,
    payload: document
})


