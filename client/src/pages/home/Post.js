import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import "./home.css"

const Post = () => {
    let { id } = useParams()
    const [post, setPost] = useState({})
    const [listOfComments, setListOfComments] = useState([])
    const [newComments, setNewComments] = useState("")

    const add_comments = () => {
        axios.post("http://localhost:3001/comments", { commentBody: newComments, PostId: id })
            .then(() => {
                const commentAdded = { commentBody: newComments }
                setListOfComments([...listOfComments, commentAdded]);
                setNewComments("")
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/getById/${id}`)
            .then((response) => {
                setPost(response.data)
            }).catch((err) => {
                console.log(err)
            });
        axios.get(`http://localhost:3001/comments/${id}`)
            .then((response) => {
                setListOfComments(response.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            {
                <div className='post_lists'>
                    <div className='left_side'>
                        <p className='title'>{post.title}</p>
                        <p className='post'>{post.postText}</p>
                        <p className='user'>{post.username}</p>
                    </div>
                    <div className='right_side'>
                        <div className='add_comment'>
                            <label htmlFor='comment'>write comments: </label>
                            <input type="text" id='comment' autoComplete='off' value={newComments} placeholder="write a comments ......" onChange={(e) => { setNewComments(e.target.value) }} />
                            <button onClick={add_comments}>Add comment</button>
                        </div>
                        <div className='comments'>
                            {listOfComments.map((value, key) => {
                                return <div className='commentList' key={key}> <p>{value.commentBody}</p></div>
                            })}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Post
