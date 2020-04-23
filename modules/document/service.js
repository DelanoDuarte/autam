const { Documents } = require("../../config/repository")


module.exports = {

    async findAll() {
        const documents = await Documents.findAll();
        return documents;
    },

    async save(document) {
        const new_document = await Documents.create({
            name: document.name,
            path: document.path
        })
        return new_document;
    }
}