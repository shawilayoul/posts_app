import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import axios from 'axios'

const Register = () => {

    const initialValues = {
        username: "",
        password: ""
    }
    const validationSchema =
        yup.object().shape({
            username: yup.string().min(3).max(20).required(),
            password: yup.string().min(4).max(15).required()
        });
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth/register", data)
            .then(() => {
                console.log(data)
            })
    }
    return (
        <div className='formik'>
            <Formik validationSchema={validationSchema} initialValues={initialValues}
                onSubmit={onSubmit}>
                <Form>
                    <h2>Registration</h2>
                    <label htmlFor="username">Username: </label>
                    <ErrorMessage name='username' />
                    <Field
                        type="text"
                        name="username"
                        autoComplete="off" />
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name='password' />
                    <Field
                        type="password"
                        name="password"
                        autoComplete="off" />
                    <button type='submit'>Create an account</button>
                </Form>
            </Formik>

        </div>
    )
}

export default Register
