
const mongoose = require("mongoose")


// userschema is created
const userSchema = new mongoose.Schema({
    FullName: {
        type: String
    },
    Email: {
        type: String,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    UserType: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    },
    Password: {
        type: String
    },
    ProfilePicture: {
        type: String
    },
    PhoneNumber: {
        type: Number
    }

})

// creating model name with "Users"and schema studentSchema is added in a model
const users = new mongoose.model('users', userSchema)

module.exports = users