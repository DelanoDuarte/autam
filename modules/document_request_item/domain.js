const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("Document_Request_Items", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        document_type_id: {
            type: Sequelize.INTEGER(),
            references: {
                model: "DocumentTypes",
                key: 'id'
            }
        },
        document_request_id: {
            type: Sequelize.INTEGER(),
            references: {
                model: "Document_Requests",
                key: 'id'
            }
        },
        active: {
            type: Sequelize.BOOLEAN(),
            defaultValue: true
        }
    }, {
        tableName: 'Document_Request_Items'
    })
}