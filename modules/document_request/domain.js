const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("Document_Requests", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        document_id: {
            type: Sequelize.INTEGER(),
            references: {
                model: "Documents",
                key: 'id'
            }
        },
        employee_id: {
            type: Sequelize.INTEGER(),
            references: {
                model: "Employees",
                key: 'id'
            }
        },
        document_type_id: {
            type: Sequelize.INTEGER(),
            references: {
                model: "DocumentTypes",
                key: 'id'
            }
        },
        active: {
            type: Sequelize.BOOLEAN(),
            defaultValue: true
        }
    }, {
        tableName: 'Document_Requests'
    })
}