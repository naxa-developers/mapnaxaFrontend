import React, { Component } from 'react';
import { Formik } from 'formik';
import {  toast } from 'react-toastify';

import Yup from './ModifiedYup';
import Input from './Input';


class Signup extends Component {

    static validationSchema = Yup.object().shape(
        {
            username: Yup.string().required("Username is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().min(8,"Password should be at least 8 character long").required("Password is required"),
            repeatedPassword: Yup.string().required("Retype your password").equalTo(Yup.ref('password'), "The passwords don't match")
        }
    );

    handleSubmit = values =>
    {
        console.log( values );
        const url = "http://localhost:8081/api";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        }
        fetch( url,options )
            .then( response => response.json() )
            .then( jsonData => 
                {
                    toast.success("You are signed up!");
                    toast.info( JSON.stringify( jsonData,null,3 ) )
                } )
            .catch( error => toast.error(error.message + " Failed To Sign UP") )
    }

    // function to get render the form to be passed as a prop in formik
    createForm = ({ values, errors, handleBlur, handleChange, handleSubmit }) => {
        return (
            <div>
                <h1>Sign Up</h1>
                <Input
                    name="username"
                    label="Username*"
                    type="email"
                    value={ values.username }
                    error={ errors.username }
                    onChange={ handleChange }
                    handleBlur={ handleBlur }
                />
                <Input
                    name="email"
                    label="Email*"
                    value={ values.email }
                    error={ errors.email }
                    onChange={ handleChange }
                    handleBlur={ handleBlur }
                />
                <Input
                    name="password"
                    label="Password*"
                    type="password"
                    value={ values.password }
                    error={ errors.password }
                    onChange={ handleChange }
                    handleBlur={ handleBlur }
                />
                <Input
                    name="repeatedPassword"
                    label="Password Confirmation*"
                    type="password"
                    value={ values.repeatedPassword }
                    error={ errors.repeatedPassword }
                    onChange={ handleChange }
                    handleBlur={ handleBlur }
                />
                <button type="button" onClick={ handleSubmit }>Sign Up</button>
            </div>
        )
    }
    
    render() {
        return (
        <div style={{position: 'absolute', top: 75, left: 270}}>
            <Formik 
                initialValues={{
                    username:"",
                    email:"",
                    password:"",
                    repeatedPassword: ""
                }}
                validationSchema={ Signup.validationSchema }
                onSubmit={ this.handleSubmit }
                render={ this.createForm }
            />
        </div>
        )
    }
}

export default Signup
