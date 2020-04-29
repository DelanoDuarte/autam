const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("DocumentTypes", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
    }, {
        tableName: 'DocumentTypes'
    })
}