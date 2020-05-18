const { DocumentTypes } = require("../../config/repository")
const { Sequelize } = require("sequelize")

const Op = Sequelize.Op

module.exports = {

    async findAll() {
        const document_types = await DocumentTypes.findAll();
        return document_types;
    },

    async save(document_type) {
        const new_document_type = await DocumentTypes.create({
            name: document_type.name
        })
        return new_document_type;
    },

    async findByName(name) {
        const doc_type = await DocumentTypes.findAll({
            where: {
                name: {
                    [Op.like]: "%" + name + "%"
                }
            }
        })
        return doc_type
    }

}