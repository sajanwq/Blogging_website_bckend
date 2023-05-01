
const mongoose = require("mongoose")


// userschema is created
const footerSchema = new mongoose.Schema({
    Title: {
        type: String
    },
    Description: {
        type: String
    },
    Email: {
        type: String,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    Images: {
        type: String
    }


})

// creating model name with "Users"and schema studentSchema is added in a model
const footers = new mongoose.model('footers', footerSchema)

module.exports = footers