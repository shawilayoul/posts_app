const express = require("express")
const { Comments } = require("../models")
const router = express.Router()

// post  router to create a comments

router.post("/", async (req, res) => {
    const comments = req.body
    const sqlComment = await Comments.create(comments)
    res.json(sqlComment)
})
//get router to get all the comments

router.get("/:PostId", async (req, res) => {
    const postId = req.params.PostId
    const sqlGetComment = await Comments.findAll({ where: { PostId: postId } })

    res.json(sqlGetComment)
})
module.exports = router