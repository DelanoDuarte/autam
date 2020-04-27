const { DocumentRequests, DocumentRequestItem, Employees, DocumentTypes } = require("../../config/repository")

module.exports = {

    async findAll() {
        const document_requests = await DocumentRequests.findAll(
            {
                attributes: ['id', 'employee_id', 'active'],
                include: [{ model: Employees, as: "employee" }]
            })
        return document_requests;
    },

    async open_document_request(document_request) {

        const new_document_request = await DocumentRequests.create({
            "name": document_request.name,
            "employee": document_request.employee,
            "documents_items": document_request.documents_items
        }, {
            include: [{
                model: DocumentRequestItem,
                as: "documents_items",
                include: [{ model: DocumentTypes, as: "document_type" }]
            }, {
                model: Employees,
                as: "employee"
            },]
        })

        return new_document_request;
    },

    async awnser_document_request(id, documents) {
        try {
            const doc_requests = await DocumentRequests.findByPk(id)
            const documentsToSave = []

            for (let index = 0; index < documents.length; index++) {
                const uploadedDoc = documents[index];
                const document = {
                    name: uploadedDoc.originalname,
                    path: uploadedDoc.path
                }
                documentsToSave.push(document)
            }
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