const { Employees } = require("../../config/repository")

module.exports = {

    findAll() {
        const employees = Employees.findAll();
        console.log(employees)
        return employees
    },

    async save(employee) {
        const new_employee = await Employees.create({
            name: employee.name,
            surname: employee.surname,
            age: employee.age,
            email: employee.email
        })
        return new_employee
    },

    async findById(employeeId) {
        const employee = await Employees.findByPk(employeeId);
        return employee;
    }

}

