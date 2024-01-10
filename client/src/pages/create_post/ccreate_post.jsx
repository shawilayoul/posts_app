import React, { useState } from 'react'
import Axios from "axios"
import "./create_post.css"
const CreatePost = () => {
    const [titles, setTitle] = useState("")
    const [post, setPost] = useState("")
    const [user, setUser] = useState("")
    const [post_list, setPost_list] = useState([])

    const submit_post = () => {
        Axios.post("http://localhost:3001/posts", { title: titles, postText: post, username: user })
            .then(() => {
                setPost_list([...post_list, post_list])
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='post_container'>
            <form action="">
                <h1>Add a post</h1>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder='ex: title ...' id='title' onChange={(e) => { setTitle(e.target.value) }} />
                <label htmlFor="post_text">Post Text</label>
                <textarea type="text" placeholder='ex: post ....' id='Post_text' onChange={(e) => { setPost(e.target.value) }} />
                <label htmlFor="user">User Name</label>
                <input type="text" placeholder='your name is ....' id='user' onChange={(e) => { setUser(e.target.value) }} />
                <button onClick={submit_post}>submit</button>
            </form>
        </div>
    )
}

export default CreatePost
