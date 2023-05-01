const express = require("express");
const footer = require("../models/FoooterModel")
const upload = require("../middleware/fileupload")
const auth = require("../middleware/auth");
const footers = require("../models/FoooterModel");
const router = new express.Router()

const app = express();



// Registering  footer details in a database
router.post('/sportsAndTravel/Footer/insertData', auth.MainGuard, auth.verifyAdmin, upload.single("Images"), function (req, res) {
    const Title = req.body.Title;
    const Description = req.body.Description;
    const Email = req.body.Email;
    const Images = req.file.filename;

    const data = new footers({ Title: Title, Description: Description, Images: Images, Email: Email });
    data.save()
        .then(function (result) {
            res.status(201).json({ message: "**Data inserted successfully!!**", success: "true" })
        })
        .catch(function (err) {
            res.status(406).json({ message: err, success: "false" })
        })

})



// Fetching  all the footer data in a footer section
router.get('/sportsAndTravel/Footer/fetchData', function (req, res) {
    footers.find()
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })

})


// Fetching single footer data
router.get('/sportsAndTravel/Footer/single/fethData/:id', function (req, res) {
    const id = req.params.id;
    footers.findOne({ _id: id })
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })

})



//************updating footers data *************** 
router.put('/sportsAndTravel/Footer/update/:id', auth.MainGuard, auth.verifyAdmin, upload.single("Images"), function (req, res) {
    console.log(req.body)
    const id = req.params.id;
    const Title = req.body.Title;
    const Email = req.body.Email;
    const Description = req.body.Description;
    const Images = req.file.filename;

    try {
        if (!Title || !Email || !Description) {
            return res.status(508).json({ message: "**Fields cannot be empty!!**" })
        }
        footers.updateOne({ _id: id }, { Title: Title, Description: Description, Email: Email, Images: Images })
            .then(function (result) {
                res.status(201).json({ message: "Updated successfully", success: true })
            })
            .catch(function (e) {
                res.status(408).json({ message: "**Try again!!**" })
            })
    }
    catch (err) {
        res.status(401).json({ message: err })

    }

})




module.exports = router