const express = require("express");
const auth = require("../middleware/auth");
const blogs = require("../models/BlogModel");
const upload = require("../middleware/fileupload")
const router = new express.Router()




// creating blogs  post
router.post('/sportsAndTravel/Blog/CreateBlog', auth.MainGuard, upload.single("Images"), function (req, res) {
    const Title = req.body.Title;
    const Introduction = req.body.Introduction;
    const MainContent = req.body.MainContent;
    const Conclusion = req.body.Conclusion;
    const Images = req.file.filename;
    const Videos = req.body.Videos;
    const Date = req.body.Date;
    const AuthorizedID = req.body.AuthorizedID;

    try {
        if (!Title || !Introduction || !MainContent || !Conclusion || !Date) {
            return res.status(508).json({ message: "**Fields cannot be empty!!**" })
        }
        const data = new blogs({ Title: Title, Introduction: Introduction, MainContent: MainContent, Conclusion: Conclusion, Images: Images, Videos: Videos, Date: Date, AuthorizedID: AuthorizedID });
        data.save()
            .then(function (result) {
                res.status(201).json({ message: "**Data inserted successfully!!**", success: "true" })
            })
            .catch(function (err) {
                res.status(406).json({ message: err, success: "false" })
            })
    }
    catch (err) {
        res.status(401).json({ message: err })

    }

})



// Fetching  all the available blogpost
router.get('/sportsAndTravel/Blog/fetchData', function (req, res) {
    blogs.find()
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })

})



// Fetching  all the blog data  and displayin full content
router.get('/sportsAndTravel/Blog/getFullData/:id', function (req, res) {
    const id = req.params.id;
    blogs.findOne({ _id: id })
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })
})





// Fetching  all the blog data for updating
router.get('/sportsAndTravel/Blog/updateBlog/:id',auth.MainGuard, function (req, res) {
    const id = req.params.id;
    blogs.findOne({ _id: id })
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })
})



//************updating Blogs data *************** 
router.put('/sportsAndTravel/Blog/updateBlog/:id', upload.single("Images"), function (req, res) {
    console.log(req.body)
    const id = req.params.id;
    const Title = req.body.Title;
    const Introduction = req.body.Introduction;
    const MainContent = req.body.MainContent;
    const Conclusion = req.body.Conclusion;
    const Images = req.file.filename

    try {
        if (!Title || !Introduction || !MainContent || !Conclusion) {
            return res.status(508).json({ message: "**Fields cannot be empty!!**" })
        }
        blogs.updateOne({ _id: id }, { Title: Title, Introduction: Introduction, Conclusion: Conclusion, Images: Images })
            .then(function (result) {
                res.status(201).json({ message: "Updated successfully" })
            })
            .catch(function (e) {
                res.status(408).json({ message: "**Try again!!**" })
            })
    }

    catch (err) {
        res.status(401).json({ message: err })

    }

})




// Fetching only personally created blog
router.get('/sportsAndTravel/Blog/MyBlog/:UserId', auth.MainGuard, function (req, res) {
    const id = req.params.UserId;
    blogs.find({ AuthorizedID: id })
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })
})




//deleting  personally created blogs from the datbase....
router.delete('/sportsAndTravel/Blog/deleteMyBlog/:blog_Id', auth.MainGuard, function (req, res) {
    const id = req.params.blog_Id
    blogs.deleteOne({ _id: id })
        .then(function () {
            res.status(201).json({ message: " deleted successfully" })
        }).catch(function (err) {
            res.status(200).json({ message: err })
        })

})







module.exports = router