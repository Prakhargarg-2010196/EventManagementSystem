import './SignUpPage.css';

import { Button, FloatingLabel, Form, Image } from 'react-bootstrap';
import React, { Component } from 'react';

import GoogleIcon from '../../../assets/google.png';
import { Link } from 'react-router-dom';

class SignUpPage extends Component {
    defaultState = {
        username: "",
        email: "",
        password: "",
        message: "",
        usernameErr: "",
        emailErr: "",
        passErr: ""
    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = this.defaultState;

    }

    handleBlur(e) {
        
        const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        const regPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
        let usernameErr = "";
        let emailErr = "";
        let passErr = "";
        if (!this.state.username)
            usernameErr = "username field is required";
        if (this.state.username.length > 9)
            usernameErr = "username field is invalid";
        if (!this.state.email || regEmail.test(this.state.email) === false)
            emailErr = "Email Field is Invalid ";
        if (!this.state.password || regPassword.test(this.state.password) === false)
            passErr = "Pass Field is Invalid ";
        if (!this.state.email)
            emailErr = "Email field is required";
        if (!this.state.password)
            passErr = "Pass field is required";
        
        this.setState({ ...this.state, [e.target.name]: e.target.value,usernameErr,emailErr, passErr });
        
        console.log(this.state);
    }

    handleFocus(e) {
        e.preventDefault();
        const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        const regPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
        let usernameErr = "";
        let emailErr = "";
        let passErr = "";
        if (!this.state.username)
            usernameErr = "username field is required";
        if (this.state.username.length > 9)
            usernameErr = "username field is invalid";
        if (!this.state.email || regEmail.test(this.state.email) === false)
            emailErr = "Email Field is Invalid ";
        if (!this.state.password || regPassword.test(this.state.password) === false)
            passErr = "Pass Field is Invalid ";
        if (!this.state.email)
            emailErr = "Email field is required";
        if (!this.state.password)
            passErr = "Pass field is required";
        
        this.setState({ ...this.state, [e.target.name]: e.target.value,usernameErr,emailErr, passErr });
        
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleKeyPress(e);
    }
    handleKeyPress(e) {

        if (e.key === "Enter")
            e.preventDefault();
    }


    render() {
        return (


            <Form className='d-flex flex-column m-4 justify-content-center'>

                <h1 className='m-5'>Create Account</h1>

              

                <Form.Group className="mb-2 form-group " controlId="formBasicUsername">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                    >
                        <Form.Control
                            name="username"
                            className=' form-control'
                            placeholder=""
                            onFocus={(e) => this.handleBlur(e)}
                            onBlur={(e) => this.handleBlur(e)} />

                        <span className="text-danger">{this.state.usernameErr}</span>

                    </FloatingLabel>


                </Form.Group>
                <Form.Group className="mb-3 form-group " controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control
                            name="email"
                            className='form-control'
                            placeholder="name@example.com"
                            type="text"
                            onFocus={(e) => this.handleBlur(e)}
                            onBlur={(e) => this.handleBlur(e)} />
                        <span className="text-danger">{this.state.emailErr}</span>

                    </FloatingLabel>

                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 form-group " controlId="formBasicPassword">

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="form-control"
                            onBlur={(e) => this.handleBlur(e)}
                            onFocus={(e) => this.handleBlur(e)}
                            // onBlur={}
                            />
                        <span className="text-danger">{this.state.passErr}</span>

                    </FloatingLabel>
                </Form.Group>
                <Link to="PasswordResetPage" className="align-self-end">
                    <Form.Text >Forgot Password?</Form.Text>
                </Link>
                <Button
                    variant="primary"
                    className='mb-2 w-100 button-signUp'
                    onClick={(e) => this.handleSubmit(e)}
                    onKeyPress={(e) => this.handleKeyPress(e)}
                    >
                    Sign Up
                </Button>
                <Form.Text >Already have an account ?</Form.Text>
                <Link to="/LogInPage">
                    <Form.Text>Login</Form.Text>
                </Link>
            </Form>
        )
    }
}
export default SignUpPage;