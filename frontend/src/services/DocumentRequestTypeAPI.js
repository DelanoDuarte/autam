import { ClientAPI } from "./ClientAPI"

export class DocumentRequestTypeAPI {

    static async fetchAllDocumentRequestTypes() {
        return await ClientAPI.get(`${process.env.REACT_APP_API_URL}/document-request-type`).then(response => response.data)
    }

    static async saveDocumentRequestType(doc_type) {
        return await ClientAPI.post(`${process.env.REACT_APP_API_URL}/document-request-type`, doc_type).then(response => response.data)
    }
}