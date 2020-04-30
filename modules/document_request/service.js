const { DocumentRequests, DocumentRequestItem, Persons, DocumentTypes, Documents } = require("../../config/repository")

module.exports = {

    async findAll() {
        const document_requests = await DocumentRequests.findAll(
            {
                attributes: ['id', 'active'],
                include: [{
                    model: DocumentRequestItem,
                    as: "documents_items",
                    include: [{ model: DocumentTypes, as: "document_type" }, { model: Documents, as: "documents" }]
                }, {
                    model: Persons,
                    as: "person"
                }]
            })
        return document_requests;
    },

    async findById(document_request_id) {
        const document_requests = await DocumentRequests.findOne(
            {
                where: {
                    id: document_request_id
                },
                attributes: ['id', 'active'],
                include: [{
                    model: DocumentRequestItem,
                    as: "documents_items",
                    include: [{ model: DocumentTypes, as: "document_type" }, { model: Documents, as: "documents" }]
                }, {
                    model: Persons,
                    as: "person"
                }]
            })
        return document_requests;
    },

    async open_document_request(document_request) {

        const new_document_request = await DocumentRequests.create({
            "name": document_request.name,
            "person": document_request.person,
            "documents_items": document_request.documents_items
        }, {
            include: [{
                model: DocumentRequestItem,
                as: "documents_items",
                include: [{ model: DocumentTypes, as: "document_type" }]
            }, {
                model: Persons,
                as: "person"
            }]
        })

        return new_document_request;
    },

    async add_new_request_item_to_request(id_request, doc_request_items) {
        try {
            doc_request_items.forEach(docRequestItem => {
                DocumentRequestItem.create({
                    "DocumentRequestId": id_request,
                    "document_type": docRequestItem.document_type
                }, { include: [{ model: DocumentTypes, as: "document_type" }] })
            })

            return this.findById(id_request)
        } catch (error) {
            console.log(error)
        }
    },

    async deactivate_request(id) {
        const doc_request = await DocumentRequests.findByPk(id)
        doc_request.active = false
        const doc_request_edited = await doc_request.save()
        return doc_request_edited
    },

    async activate_request(id) {
        const doc_request = await DocumentRequests.findByPk(id)
        doc_request.active = true
        const doc_request_edited = await doc_request.save()
        return doc_request_edited
    },

    async delete_request(id) {
        const doc_request = await DocumentRequests.findByPk(id)
        return doc_request.destroy()
    }

}