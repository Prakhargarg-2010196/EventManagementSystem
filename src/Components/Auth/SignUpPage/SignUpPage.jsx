import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import React, { Component } from "react";

import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import styles from "./SignUpPage.module.css";

export const SignUpPageNavbar = () => {
    return (
        <Navbar expand="lg" className={styles.Navbar} variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <Image src={Logo} width={40}></Image>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Link to="/logInPage" className={styles.navLinks}>
                        Login
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

class SignUpPage extends Component {

   
    defaultState = {
        username: "",
        email: "",
        password: "",
        message: "",
        usernameErr: "",
        emailErr: "",
        passErr: "",
    };
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
        if (!this.state.username) usernameErr = "username field is required";
        if (this.state.username.length > 9)
            usernameErr = "username field is invalid";
        if (!this.state.email || regEmail.test(this.state.email) === false)
            emailErr = "Email Field is Invalid ";
        if (!this.state.password || regPassword.test(this.state.password) === false)
            passErr = "Pass Field is Invalid ";
        if (!this.state.email) emailErr = "Email field is required";
        if (!this.state.password) passErr = "Pass field is required";

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            usernameErr,
            emailErr,
            passErr,
        });

    }
    
    handleFocus(e) {
        e.preventDefault();
        const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        const regPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
        let usernameErr = "";
        let emailErr = "";
        let passErr = "";
        if (!this.state.username) usernameErr = "username field is required";
        if (this.state.username.length > 9)
            usernameErr = "username field is invalid";
        if (!this.state.email || regEmail.test(this.state.email) === false)
            emailErr = "Email Field is Invalid ";
        if (!this.state.password || regPassword.test(this.state.password) === false)
            passErr = "Pass Field is Invalid ";
        if (!this.state.email) emailErr = "Email field is required";
        if (!this.state.password) passErr = "Pass field is required";

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            usernameErr,
            emailErr,
            passErr,
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleKeyPress(e);
        this.props.history.push("/otpSignUp");
          
    }
    handleKeyPress(e) {
        if (e.key === "Enter") e.preventDefault();
    }

    render() {
        return (
            <div className={styles.body}>
                <SignUpPageNavbar />
                <Image src={CalendarMobile} className={styles.calendarImage}></Image>
                <Form className={styles.form}>
                    <h2 className="text-center   ">Create Account</h2>

                    <Form.Group
                        className={styles.formGroup}
                        controlId="formBasicUsername"
                    >
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3"
                        >
                            <Form.Control
                                name="username"
                                className=" form-control"
                                placeholder=""
                                onFocus={(e) => this.handleBlur(e)}
                                onBlur={(e) => this.handleBlur(e)}
                            />

                            <span className="text-danger">{this.state.usernameErr}</span>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control
                                name="email"
                                className="form-control"
                                placeholder="name@example.com"
                                type="text"
                                onFocus={(e) => this.handleBlur(e)}
                                onBlur={(e) => this.handleBlur(e)}
                            />
                            <span className="text-danger">{this.state.emailErr}</span>
                        </FloatingLabel>

                        <Form.Text className="text-danger">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group
                        className={styles.formGroup}
                        controlId="formBasicPassword"
                    >
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
                        <Form.Text>Forgot Password?</Form.Text>
                    </Link>

                    <Button
                        variant="primary"
                        className={styles.buttonSignUp}
                        onClick={(e) => this.handleSubmit(e)}
                        onKeyPress={(e) => this.handleKeyPress(e)}
                    >
                       Sign Up
                    </Button>
                    <Form.Text>Already have an account ?</Form.Text>
                    <Link to="LogInPage">
                        <Form.Text>Login</Form.Text>
                    </Link>
                </Form>
            </div>
        );
    }
}
export default SignUpPage;
