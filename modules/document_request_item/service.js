const { DocumentRequestItem, Documents, DocumentTypes } = require("../../config/repository")
const { Util } = require("../utils/Util");

const storage = require("../../config/storage")

module.exports = {

    async findAll() {
        const document_requests = await DocumentRequestItem.findAll(
            {
                attributes: ['id', 'document_type_id', 'active'],
                include: [{ model: DocumentTypes, as: "document_type" }, { model: Documents, as: "documents" }]
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

    async awnser_document_request_item(id_document_request_item, documents_uploaded) {
        try {
            const doc_uploaded = Util.mapRequestFilesToArray(documents_uploaded);
            let doc_request_item = await DocumentRequestItem.findOne({
                where: {
                    id: id_document_request_item
                },
                include: [{
                    model: Documents,
                    as: "documents",
                    through: {
                        attributes: []
                    }
                }]
            })

            for (let index = 0; index < doc_uploaded.length; index++) {
                const uploadedDoc = doc_uploaded[index];
                const document = {
                    name: uploadedDoc.originalname,
                    path: uploadedDoc.path
                }
                doc_request_item.createDocument(document)
            }

            const updated_doc_request_item = await doc_request_item.update({})

            return updated_doc_request_item

        } catch (error) {
            console.log(error)
        }
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