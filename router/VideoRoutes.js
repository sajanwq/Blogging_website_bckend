const express = require("express");
const auth = require("../middleware/auth");
const videos = require("../models/VideoModel");
const router = new express.Router()


// uploading videos
router.post('/sportsAndTravel/Videos/Upload', auth.MainGuard, auth.verifyAdmin, function (req, res) {
    const Title = req.body.Title;
    const Description = req.body.Description;
    const UrlLinks = req.body.UrlLinks;

    try {
        if (!Title || !Description || !UrlLinks) {
            return res.status(508).json({ message: "**Fields cannot be empty!!**" })
        }
        const data = new videos({ Title: Title, Description: Description, UrlLinks: UrlLinks });
        data.save()
            .then(function (result) {
                res.status(201).json({ message: "**Inserted successfully!!**", success: "true" })
            })
            .catch(function (err) {
                res.status(406).json({ message: err, success: "false" })
            })
    }
    catch (err) {
        res.status(401).json({ message: err })

    }

})



// Fetching  all the  videos
router.get('/sportsAndTravel/Videos/FetchVideo', function (req, res) {
    videos.find()
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })
})


// Fetching  all the  individual videos data
router.get('/sportsAndTravel/Videos/Fetch/Individual/Video/:VideoId', auth.MainGuard, auth.verifyAdmin, function (req, res) {
    console.log(req.body.params)
    const id = req.params.VideoId;
    videos.findOne({ _id: id })
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })
})





//deleting  videos
router.delete('/sportsAndTravel/Videos/delete/:vid_id', auth.MainGuard, auth.verifyAdmin, function (req, res) {
    const id = req.params.vid_id
    videos.deleteOne({ _id: id })
        .then(function () {
            res.status(201).json({ message: " deleted successfully" })
        }).catch(function (err) {
            res.status(401).json({ message: err })
        })

})


//updating  videos
router.put('/sportsAndTravel/Videos/update/:vid_id', auth.MainGuard, auth.verifyAdmin, function (req, res) {
    const id = req.params.vid_id;
    const Title = req.body.Title;
    const Description = req.body.Description;
    try {
        if (!Title || !Description) {
            return res.status(508).json({ message: "**Fields cannot be empty!!**" })
        }
        videos.updateOne({ _id: id }, { Title: Title, Description: Description })
            .then(function () {
                res.status(201).json({ message: " Updated successfully", success: true })
            }).catch(function (err) {
                res.status(401).json({ message: err })
            })

    } catch (err) {
        res.status(400).json({ message: err })


    }


})








































module.exports = router