
const mongoose = require("mongoose")


// userschema is created
const commentSchema = new mongoose.Schema({
    Comment: {
        type: String
    },
    Rating: {
        type: Number
    },
    AuthorizedID: {
        type: String
    },
    UserName: {
        type: String
    },
    UserProfilePicture: {
        type: String
    }

})

// exporting models
const comments = new mongoose.model('comments', commentSchema)

module.exports = comments