const express = require("express")
const router = express.Router()

const documentRequestItemService = require("./service")

router.get("/", (req, res) => {
    documentRequestItemService.findAll()
        .then((data) => {
            res.json({ "document_requests_items": data })
        }).catch((err) => {
            console.log(err)
            res.status(500)
            res.json({ "data": "something bad happened" })
        });
})

router.post("/", (req, res) => {
    const new_document_request = { ...req.body }
    documentRequestItemService.open_document_request(new_document_request)
        .then(data => {
            res.json({ "document_requests_items": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.post("/deactivate/:id", (req, res) => {
    const id = req.params.id
    documentRequestItemService.deactivate_request(id)
        .then(data => {
            res.json({ "document_requests_items": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.post("/activate/:id", (req, res) => {
    const id = req.params.id
    documentRequestItemService.activate_request(id)
        .then(data => {
            res.json({ "document_requests_item": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    documentRequestItemService.delete_request(id)
        .then(() => {
            res.status(200)
            res.send()
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

module.exports = router;