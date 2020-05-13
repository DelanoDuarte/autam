const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

//routers
app.use("/person", require("./modules/person/index"))
app.use("/document-type", require("./modules/document_type"))
app.use("/document-request-item", require("./modules/document_request_item"))
app.use("/document-request", require("./modules/document_request"))


require("./config/repository");
require("./config/storage")

app.get("/", (req, res) => {
    res.send({ "status": "Server UP" })
})

app.listen(3000, () => {
    console.log("App Running...")
})