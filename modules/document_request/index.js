const express = require("express")
const router = express.Router()
const storage = require("../../config/storage")

const documentRequestService = require("./service")

router.get("/", (req, res) => {
    documentRequestService.findAll()
        .then((data) => {
            res.json({ "document_requests": data })
        }).catch((err) => {
            console.log(err)
            res.status(500)
            res.json({ "data": "something bad happened" })
        });
})

router.post("/", (req, res) => {
    const new_document_request = { ...req.body }
    documentRequestService.open_document_request(new_document_request)
        .then(data => {
            res.json({ "document_request": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.post("/deactivate/:id", (req, res) => {
    const id = req.params.id
    documentRequestService.deactivate_request(id)
        .then(data => {
            res.json({ "document_request": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.post("/activate/:id", (req, res) => {
    const id = req.params.id
    documentRequestService.activate_request(id)
        .then(data => {
            res.json({ "document_request": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    documentRequestService.delete_request(id)
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

router.post("/:id/add/item", (req, res) => {
    const id = req.params.id
    const doc_items = { ...req.body }
    documentRequestService.add_new_request_item_to_request(id, doc_items.documents_items)
        .then(data => {
            res.status(200)
            res.json({ "document_request": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

router.post("/create/multiple", (req, res) => {
    const document_requests = { ...req.body }
    documentRequestService.open_document_requests_multiple_people(document_requests)
        .then((data) => {
            res.status(200)
            res.json({ "document_requests": data })
        })
        .catch(error => {
            console.log(error)
            res.status(500)
            res.json({ "data": "something bad happened" })
        })
})

module.exports = router;