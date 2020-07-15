import { ClientAPI } from "./ClientAPI";


export class DocumentTypeFolderAPI {

    static async findAll() {
        return await ClientAPI.get(`${process.env.REACT_APP_API_URL}/document-type-folder`)
            .then(response => response.data)
    }

    static async create(documentTypeFolder) {
        return await ClientAPI.post(`${process.env.REACT_APP_API_URL}/document-type-folder`, documentTypeFolder)
            .then(response => response.data)
    }
}