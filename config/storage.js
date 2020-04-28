const multer = require("multer")

const disk_storage = multer.diskStorage({
    dest: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const storage = multer({
    storage: disk_storage
})

module.exports = {
    storage
}