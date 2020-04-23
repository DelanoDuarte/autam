const express = require("express")
const router = express.Router()

const employeeService = require("./service")

router.get("/", (req, res) => {
    employeeService.findAll()
        .then(data => {
            res.json({ "employees": data })
        }).catch(() => {
            res.status(500)
            res.json({ "status": "something is wrong" })
        })
})

router.post("/", (req, res) => {
    const employee = { ...req.body }
    employeeService.save(employee)
        .then(emp => {
            res.json({ "employee": emp.toJSON() })
        })
        .catch(error => {
            res.status(500)
            res.json({ "error": "something bad happened" })
        })
})

module.exports = router;