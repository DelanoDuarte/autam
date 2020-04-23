const { DocumentTypes } = require("../../config/repository")

module.exports = {

    async findAll() {
        const document_types = DocumentTypes.findAll();
        return document_types;
    },

    async save(document_type) {
        const new_document_type = DocumentTypes.create({
            name: document_type.name
        })
        return new_document_type;
    }

}