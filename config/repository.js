const Sequelize = require("sequelize")

const EmployeeModel = require("../modules/employee/domain")
const DocumentModel = require("../modules/document/domain")
const TeamModel = require("../modules/team/domain")
const DocumentTypeModel = require("../modules/document_type/domain")
const DocumentRequestModel = require("../modules/document_request/domain")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})


const Employees = EmployeeModel(sequelize, Sequelize)
const Documents = DocumentModel(sequelize, Sequelize)
const Teams = TeamModel(sequelize, Sequelize)
const DocumentTypes = DocumentTypeModel(sequelize, Sequelize)
const DocumentRequests = DocumentRequestModel(sequelize, Sequelize)

//relationships
DocumentRequests.belongsTo(Documents, { foreignKey: "document_id" })
DocumentRequests.belongsTo(Employees, { foreignKey: "employee_id", as: "employee" })
DocumentRequests.belongsTo(DocumentTypes, { foreignKey: "document_type_id", as: "document_type" })

Teams.hasMany(Employees)
Employees.belongsTo(Teams)


sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    sequelize,
    Employees,
    Documents,
    Teams,
    DocumentTypes,
    DocumentRequests
};
global.sequelize = sequelize;