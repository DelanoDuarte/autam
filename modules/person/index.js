const express = require("express")
const router = express.Router()

const personService = require("./service")

router.get("/", (req, res) => {
    personService.findAll()
        .then(data => {
            res.json({ "people": data })
        }).catch(() => {
            res.status(500)
            res.json({ "status": "something is wrong" })
        })
})

router.post("/", (req, res) => {
    const employee = { ...req.body }
    personService.save(employee)
        .then(emp => {
            res.json({ "person": emp.toJSON() })
        })
        .catch(error => {
            res.status(500)
            res.json({ "error": "something bad happened" })
        })
})

module.exports = router;