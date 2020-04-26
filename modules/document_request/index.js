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

router.post("/:id/answer", storage.storage.array("documents"), (req, res) => {
    const id = req.params.id
    const files = { ...req.files }
    documentRequestService.awnser_document_request(id, files)
        .then(response => {
            console.log(response)
            res.json({ data: "ANSWER Request" })
        })
})

module.exports = router;