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
        employee_id: {
            type: Sequelize.INTEGER(),
            references: {
                model: "Employees",
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