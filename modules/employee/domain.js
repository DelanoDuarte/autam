const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("Employees", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: Sequelize.STRING(255),
        surname: Sequelize.STRING(255),
        email: Sequelize.STRING(100),
        age: Sequelize.INTEGER()
    }, {
        tableName: 'Employees'
    })
}