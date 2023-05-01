
const mongoose = require("mongoose")


// userschema is created
const blogSchema = new mongoose.Schema({
    Title: {
        type: String
    },
    Introduction: {
        type: String
    },
    MainContent: {
        type: String,

    },
    Conclusion: {
        type: String
    },

    Images: {
        type: String
    },
    Videos: {
        type: String
    },

    AuthorizedID: {
        type: String
    },
    Date: {
        type: Date
    }


})

// creating model name with "Users"and schema studentSchema is added in a model
const blogs = new mongoose.model('blogs', blogSchema)

module.exports = blogs