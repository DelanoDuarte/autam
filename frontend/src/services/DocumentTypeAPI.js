import { ClientAPI } from "./ClientAPI";

export class DocumentTypeAPI {

    static async fetchAllDocumentTypes() {
        return await ClientAPI.get(`${process.env.REACT_APP_API_URL}/document-type`).then(response => response.data)
    }

    static async saveDocumentType(doc_type) {
        return await ClientAPI.post(`${process.env.REACT_APP_API_URL}/document-type`, doc_type).then(response => response.data)
    }
}