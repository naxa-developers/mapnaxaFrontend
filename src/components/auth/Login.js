import React, { Component } from 'react';
import { Formik } from 'formik';
import Yup from './ModifiedYup';
import Input from './Input';

class Login extends Component
{
    static validationSchema = Yup.object().shape({
        username: Yup.string().email().required(),
        password: Yup.string().required()
    });

    handleSubmit = values =>
    {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( values,null,2 )
        }
        fetch("http://localhost:8081/api", options)
            .then( response => response.json() )
            .then( jsonData => alert( JSON.stringify( jsonData,null,3 ) ) )
            .catch( error => alert( error.message ) )
    }

    createForm = ({ values, errors, handleBlur, handleChange, handleSubmit }) => 
    (<div style={{position:'absolute', top:75, left:270}}>
        <h1>Log In</h1>
        <Input 
            name="username"
            label="Username"
            type="email"
            value={ values.username }
            onChange={ handleChange }
            handleBlur={ handleBlur }
            error={ errors.username }
        />
        <Input
            name="password"
            label="Password"
            type="password"
            value={ values.password }
            onChange={ handleChange }
            handleBlur={ handleBlur }
            error={ errors.password }
        />
        <button type="button" onClick={ handleSubmit }>
            Log In
        </button>
    </div>);

    render()
    {
        return (
            <Formik 
                initialValues={{
                    username: "",
                    password: ""
                }}
                validationSchema={ Login.validationSchema }
                onSubmit={ this.handleSubmit }
                render={ this.createForm }
            />
        );
    }
}

export default Login;