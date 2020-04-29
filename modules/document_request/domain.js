const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("Document_Requests", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: Sequelize.STRING(255),
        person_id: {
            type: Sequelize.INTEGER(),
            references: {
                model: "Persons",
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