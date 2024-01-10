const express = require('express')
const { Posts } = require("../models")
const router = express.Router()

//get a post

router.get("/", async (req, res) => {
    const get_posts = await Posts.findAll()
    res.json(get_posts)
})

//get apost by id
router.get("/getById/:id", async (req, res) => {
    const id = req.params.id
    const getById = await Posts.findByPk(id)
    res.json(getById)
})

// creating a post 
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
})

module.exports = router;