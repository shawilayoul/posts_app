const express = require("express")
const router = express.Router()
const { Users } = require("../models")
const bcrypt = require("bcrypt")
// register route

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({ username: username, password: hash })
    })
    res.json({ message: "successfull " })
})

//login router
router.post("/login", async (req, res) => {
    const { username, password } = req.body

    const user = await Users.findOne({ where: { username: username } })
    if (!user) {
        res.json({ message: "user dose not exist" })
    }
    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            res.json({ message: "user name and password not combine" })
        }
        res.json({ message: "login sucessfully" })
    })

})
module.exports = router

