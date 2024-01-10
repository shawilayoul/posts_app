import React from "react";
import Home from "./pages/home/Home"
import "./App.css"
import CreatePost from "./pages/create_post/ccreate_post";
import Post from "./pages/home/Post";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"

const App = () => {
    return (
        <div className=" router">
            <Router>
                <div className="links">
                    <Link to="/" className="link">Home page</Link>
                    <Link to="/create_post" className="link">Create A post</Link>
                    <Link to="/register" className="link">Register</Link>
                    <Link to="/login" className="link">Login</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create_post" element={<CreatePost />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App