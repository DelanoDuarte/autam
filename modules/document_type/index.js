const express = require("express")
const router = express.Router()

const documentTypeService = require("./service")

router.get("/", (req, res) => {
    documentTypeService.findAll()
        .then(data => {
            res.json({ "document_types": data })
        }).catch(() => {
            res.status(500)
            res.json({ "status": "something is wrong" })
        })
})


router.post("/", (req, res) => {
    const document_type = { ...req.body }
    documentTypeService.save(document_type)
        .then(data => {
            res.json({ "document_type": data })
        })
        .catch(error => {
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.post("/find/name", (req, res) => {
    const body = { ...req.body }
    documentTypeService.findByName(body.name)
        .then(data => {
            res.json({ "document_types": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

module.exports = router;