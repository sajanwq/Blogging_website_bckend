const mongoose = require("mongoose")

//connection with database callled SportsAndTravel
const databaseConnection = mongoose.connect('mongodb://127.0.0.1:27017/SportsAndTravel', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
