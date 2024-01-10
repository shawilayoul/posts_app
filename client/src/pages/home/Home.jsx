import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import "./home.css"

const Home = () => {
    const [post_list, setPost_list] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        Axios.get("http://localhost:3001/posts")
            .then((response) => {
                setPost_list(response.data)
            })
    }, [])


    return (
        <div>
            {post_list.map((value, key) => {
                return <div className="post_list" key={key.id} onClick={() => { navigate(`/post/${value.id}`) }}>
                    <div className='title'><h2> {value.title}</h2></div>
                    <div className='post'><p>{value.postText}</p></div>
                    <div className='user'><h4>{value.username}</h4></div>
                </div>
            })}
        </div>
    )
}

export default Home
