import { ClientAPI } from "./ClientAPI";

export class DocumentRequestAPI {

    static async saveDocumentRequest(documentRequest) {
        return await ClientAPI.post(`${process.env.REACT_APP_API_URL}/document-request/multiple`, documentRequest)
            .then(response => response.data)
    }

    static async findAllDocumentRequests() {
        return await ClientAPI.get(`${process.env.REACT_APP_API_URL}/document-request`)
            .then(response => response.data)
    }
}