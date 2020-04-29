const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("Persons", {
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
        surname: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER(),
            allowNull: false
        }
    }, {
        tableName: 'Persons'
    })
}