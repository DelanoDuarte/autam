import { ClientAPI } from "./ClientAPI";

export class DocumentTypeAPI {

    static async fetchAllDocumentTypes() {
        return await ClientAPI.get(`${process.env.REACT_APP_API_URL}/document-type`).then(response => response.data)
    }

}