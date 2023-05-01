const multer = require("multer")

// it uploads file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files')
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

// filtering  the image
const filter = function (req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
        cb(null, true)
    }
    else {
        cb(null, false)
    }

}



const upload = multer({
    storage: storage,
    fileFilter: filter
});

module.exports = upload;