const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("DocumentTypes", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: Sequelize.STRING(255),
    }, {
        tableName: 'DocumentTypes'
    })
}