const express = require("express");
const auth = require("../middleware/auth");
const upload = require("../middleware/fileupload")
const comments = require("../models/CommentModel")
const router = new express.Router()


// creating   New comments
router.post('/sportsAndTravel/Comment/CreateComment', auth.MainGuard, function (req, res) {
    const Comment = req.body.Comment;
    const Rating = req.body.Rating;
    const AuthorizedID = req.body.AuthorizedID;
    const UserName = req.body.UserName;
    const UserProfilePicture = req.body.UserProfilePicture;
    try {
        if (!Comment) {
            return res.status(508).json({ message: "**Fields cannot be empty!!**" })
        }
        const data = new comments({ Comment: Comment, Rating: Rating, AuthorizedID: AuthorizedID, UserName: UserName, UserProfilePicture: UserProfilePicture });
        data.save()
            .then(function (result) {
                res.status(201).json({ message: "**Commented successfully!!**", success: "true" })
            })
            .catch(function (err) {
                res.status(406).json({ message: err, success: "false" })
            })
    }
    catch (err) {
        res.status(401).json({ message: err })

    }

})



// Fetching  all the available  comments
router.get('/sportsAndTravel/Comment/FetchComment', function (req, res) {
    comments.find()
        .then(function (data) {
            res.send(data)
        }).catch(function () {
            res.status(401).json({ message: err })
        })
})



//deleting  comments by admin
router.delete('/sportsAndTravel/Comment/Delete/:comment_ID', auth.MainGuard, auth.verifyAdmin, function (req, res) {
    console.log(req.params)
    const id = req.params.comment_ID
    comments.deleteOne({ _id: id })
        .then(function () {
            res.status(201).json({ message: " deleted successfully", success: true })
        }).catch(function (err) {
            res.status(200).json({ message: err })
        })

})



module.exports = router