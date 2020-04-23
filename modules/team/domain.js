const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("Teams", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: Sequelize.STRING(255),
        active: {
            type: Sequelize.BOOLEAN(),
            defaultValue: false
        }
    }, {
        tableName: 'Teams'
    })
}