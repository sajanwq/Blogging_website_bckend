
const mongoose = require("mongoose")


// userschema is created
const videoSchema = new mongoose.Schema({
    Title: {
        type: String
    },
    Description: {
        type: String
    },
    UrlLinks: {
        type: String
    }

})

// exporting models
const videos= new mongoose.model('videos', videoSchema)

module.exports = videos