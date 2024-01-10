const express = require("express");
const cors = require("cors")
const bodyparser = require("body-parser")


const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))

const db = require("./models");
//post routes
const postRoute = require("./routes/posts")
app.use("/posts", postRoute)
//comments routes
const commentRoute = require("./routes/comments")
app.use("/comments", commentRoute)
//User routes
const userRoute = require("./routes/User")
app.use("/auth", userRoute)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});