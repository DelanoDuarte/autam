const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("Documents", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: Sequelize.STRING(255),
        path: Sequelize.STRING(255)
    }, {
        tableName: 'Documents'
    })
}