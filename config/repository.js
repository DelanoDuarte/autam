const Sequelize = require("sequelize")

const PersonModel = require("../modules/person/domain")
const DocumentModel = require("../modules/document/domain")
const TeamModel = require("../modules/team/domain")
const DocumentTypeModel = require("../modules/document_type/domain")
const DocumentRequestItemModel = require("../modules/document_request_item/domain")
const DocumentRequestModel = require("../modules/document_request/domain")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})


const Persons = PersonModel(sequelize, Sequelize)
const Documents = DocumentModel(sequelize, Sequelize)
const Teams = TeamModel(sequelize, Sequelize)
const DocumentTypes = DocumentTypeModel(sequelize, Sequelize)
const DocumentRequestItem = DocumentRequestItemModel(sequelize, Sequelize)
const DocumentRequests = DocumentRequestModel(sequelize, Sequelize)

//relationships
DocumentRequestItem.belongsToMany(Documents, { as: "documents", through: 'DocumentRequestItemFiles' })
DocumentRequestItem.belongsTo(DocumentTypes, { foreignKey: "document_type_id", as: "document_type" })

DocumentTypes.hasOne(DocumentRequestItem)

DocumentRequests.hasMany(DocumentRequestItem, { as: "documents_items" })
DocumentRequestItem.belongsTo(DocumentRequests)

DocumentRequests.belongsTo(Persons, { foreignKey: "person_id", as: "person" })

Teams.hasMany(Persons)
Persons.belongsTo(Teams)


sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    sequelize,
    Persons,
    Documents,
    Teams,
    DocumentTypes,
    DocumentRequestItem,
    DocumentRequests
};
global.sequelize = sequelize;