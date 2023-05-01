const express = require("express");
const users = require("../models/userModel")
const upload = require("../middleware/fileupload")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const auth = require("../middleware/auth")
const router = new express.Router()

const app = express();



// Rigistering user data into database
router.post('/sportsAndTravel/signup', function (req, res) {
    var FullName = req.body.FullName;
    var Email = req.body.Email;
    var Password = req.body.Password;
    users.findOne({ Email: Email })
        .then(function (data) {
            if (data != null) {
                return res.status(501).json({ message: "**Email already registered!**", success: "false" })
            }
            // Encrypting password by using hash function of brcyptjs packgae
            bcrypt.hash(Password, 10, function (err, HashedPassword) {
                const data = new users({ FullName: FullName, Password: HashedPassword, Email: Email });
                data.save()
                    .then(function (result) {
                        res.status(201).json({ message: "**data inserted successfully!!**", success: "true" })
                    })
                    .catch(function (err) {
                        res.status(406).json({ message: "**please fill all the input fields!!**", success: "false" })
                    })
            })

        })
        .catch(function (err) {
            res.status(503).json({ message: "Ops!! something went wrong!!" })

        })

})


// fetching  all the user registered data
router.get('/sportsAndTravel/registeredUsers', auth.MainGuard, auth.verifyAdmin, function (req, res) {
    users.find().then(function (data) {
        res.send(data)
    })
        .catch(function (e) {
            res.status(404).json({ mesage: e })
        })
})


// view personal profile routes
router.get('/sportsAndTravel/profile/user/:id', auth.MainGuard, function (req, res) {
    const id = req.params.id;
    users.findOne({ _id: id }).then(function (data) {
        res.status(201).send(data)
    })
        .catch(function (e) {
            res.status(404).json({ message: "**data not found**" })
        })
})




//updating  users data and profile 
router.put('/sportsAndTravel/update/userdata/:id', auth.MainGuard, upload.single("ProfilePicture"), function (req, res) {
    const id = req.params.id;
    const FullName = req.body.FullName
    const Email = req.body.Email
    const PhoneNumber = req.body.PhoneNumber
    const ProfilePicture = req.file.filename



    try {
        if (!PhoneNumber || !FullName || !Email || !ProfilePicture) {
            return res.status(508).json({ message: "**Fields cannot be empty!!**" })
        } else {
            users.updateOne({ _id: id }, { FullName: FullName, Email: Email, PhoneNumber: PhoneNumber, ProfilePicture: ProfilePicture })
                .then(function (result) {
                    res.status(201).json({ message: "updated successfully" })
                })
                .catch(function (e) {
                    res.status(408).json({ message: "**Try again later!!**" })
                })
        }

    }
    catch (err) {
        res.status(401).json({ message: "opps something went wrong" })

    }


})








//deleting  registerd users
router.delete('/sportsAndTravel/delete/userdata/:userId', auth.MainGuard, auth.verifyAdmin, function (req, res) {
    const userid = req.params.userId
    users.deleteOne({ _id: userid }).then(function () {
        res.status(201).json({ message: " Deleted successfully" })
    }).catch(function (err) {
        res.status(200).json({ message: err })
    })


})


//deleting  my personal profiles  usersexcept admin
router.delete('/sportsAndTravel/delete/myProfile/:userId', auth.MainGuard, auth.verifyUser, function (req, res) {
    const id = req.params.userId
    users.deleteOne({ _id: id })
        .then(function () {
            res.status(201).json({ message: " deleted successfully" })
        }).catch(function (err) {
            res.status(200).json({ message: err })
        })

})





//login system Authentication practic

router.post('/sportsAndTravel/userLogin', function (req, res) {
    const Email = req.body.Email;
    const Password = req.body.Password;
    users.findOne({ Email: Email })
        .then(function (usersdata) {
            // checks the username in students model
            if (usersdata === null) {
                return res.status(401).json({ message: "Invalid Credentials!!" })
            }
            // if the data is not empty in database it checks password
            bcrypt.compare(Password, usersdata.Password, function (err, result) {
                if (result === false) {
                    // if the password is incorrect
                    return res.status(401).json({ message: "Invalid Crredentials!!", success: "false" })
                }
                // if the password is found correct
                const userdata = { FullName: usersdata.FullName, id: usersdata._id, UserType: usersdata.UserType, ProfilePicture: usersdata.ProfilePicture }
                const token = jwt.sign({ yourId: usersdata._id }, 'anysecretkey')
                //console.log(typeof token)
                res.status(201).json({ token: token, userdata: userdata, message: "Auth success!!" })


            })

        })
        .catch(function (e) {
            res.status(500).json({ message: "Try again later!!" })
        })

})


module.exports = router