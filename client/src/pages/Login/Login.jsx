import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import axios from 'axios'

const Login = () => {
    const initialValues = {
        username: "",
        password: ""
    }
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth/login", data)
            .then(() => {
                console.log(data)
            })
    }
    return (
        <div className='formik'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <ErrorMessage name='username' component="span" />
                    <Field name="username" type="text" />
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name='password' component="span" />
                    <Field name="password" type="password" />
                    <button type='submit'>Login</button>
                </Form>
            </Formik>

        </div>
    )
}

export default Login
