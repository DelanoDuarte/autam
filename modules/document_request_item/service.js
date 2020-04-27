const { DocumentRequestItem, Documents, DocumentTypes } = require("../../config/repository")

const storage = require("../../config/storage")

module.exports = {

    async findAll() {
        const document_requests = await DocumentRequestItem.findAll(
            {
                attributes: ['id', 'document_type_id', 'active'],
                include: [{ model: DocumentTypes, as: "document_type" }, { model: Documents }]
            })
        return document_requests;
    },

    async open_document_request(document_request) {
        const new_document_request = await DocumentRequestItem.create({
            "document_id": document_request.document,
            "document_type_id": document_request.documentType
        }, { include: [] })
        return new_document_request;
    },


    async deactivate_request(id) {
        const doc_request = await DocumentRequestItem.findByPk(id)
        doc_request.active = false
        const doc_request_edited = await doc_request.save()
        return doc_request_edited
    },

    async activate_request(id) {
        const doc_request = await DocumentRequestItem.findByPk(id)
        doc_request.active = true
        const doc_request_edited = await doc_request.save()
        return doc_request_edited
    },

    async delete_request(id) {
        const doc_request = await DocumentRequestItem.findByPk(id)
        return doc_request.destroy()
    }

}