const jwt = require("jsonwebtoken");
const users = require("../models/userModel")

module.exports.MainGuard = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, 'anysecretkey')
        users.findOne({ _id: data.yourId })
            .then(function (result) {
                req.userdata = result
                next()
            }).catch(function (e) {
                res.status(401).json({ message: "unauthorized access" })

            })

    } catch (e) {
        res.status(401).json({ message: e })
    }
}



// creating subguard to...............
module.exports.verifyAdmin = function (req, res, next) {
    try {
        if (!req.userdata) {
            return res.status(401).json({ message: "Not a valid!!" })
        }
        else if (req.userdata.UserType !== "Admin") {
            return res.status(401).json({ message: "unauthorized access!!" })
        }
        next()
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports.verifyUser = function (req, res, next) {
    try {
        if (!req.userdata) {
            return res.status(401).json({ message: "data is empty!!" })
        }
        else if (req.userdata.UserType !== "User") {
            return res.status(401).json({ message: "unauthorized access!!" })
        }
        next()
    } catch (err) {
        res.status(500).json(err)
    }
}



