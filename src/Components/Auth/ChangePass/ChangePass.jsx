import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';

import CalendarMobile from "../../../assets/CalendarMobile.svg"
import { Link } from 'react-router-dom';
import Logo from "../../../assets/logo.png";
import styles from './ChangePass.module.css';

export const ChangePasswordPageNavbar = () => {
    return (
        <Navbar expand="lg" className={styles.Navbar} variant="dark">
            <Container >
                <Navbar.Brand>
                    <Link to="/"><Image src={Logo} width={40}></Image></Link>
                </Navbar.Brand>
                <Nav>
                    <Link to="/signUpPage" className={styles.navLinks}>Sign Up</Link>
                </Nav>

            </Container>
        </Navbar>
    )
}
class ChangePass extends Component {
    defaultState = {
        newPassword: "",
        confirmPassword: "",
        newPasswordErr: "",
        confirmPasswordErr: "",
    }
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = this.defaultState;

    }

    handleBlur(e) {
        e.preventDefault();
        const regPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
        let newPasswordErr = "";
        let confirmPasswordErr = "";

        if (!this.state.newPassword || regPassword.test(this.state.newPassword) === false)
            newPasswordErr = " new Pass Field is Invalid ";
        if (!this.state.newPassword)
            newPasswordErr = " new Pass field is required";
        if (!this.state.confirmPassword || regPassword.test(this.state.confirmPassword) === false)
            confirmPasswordErr = "confirm Pass Field is Invalid ";
        if (!this.state.confirmPassword)
            confirmPasswordErr = "confirm Pass field is required";

        this.setState({ ...this.state, [e.target.name]: e.target.value, newPasswordErr, confirmPasswordErr });

        console.log(this.state);
    }
    handleFocus(e) {
        e.preventDefault();
        const regPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;
        let newPasswordErr = "";
        let confirmPasswordErr = "";

        if (!this.state.newPassword || regPassword.test(this.state.newPassword) === false)
            newPasswordErr = "new Pass Field is Invalid ";
        if (!this.state.newPassword)
            newPasswordErr = "new Pass field is required";
        if (!this.state.confirmPassword || regPassword.test(this.state.confirmPassword) === false)
            confirmPasswordErr = "confirm Pass Field is Invalid ";
        if (!this.state.confirmPassword)
            confirmPasswordErr = "confirm Pass field is required";

        this.setState({ ...this.state, [e.target.name]: e.target.value, newPasswordErr, confirmPasswordErr });
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
            <div className={styles.body}>
                <ChangePasswordPageNavbar />
                <Image src={CalendarMobile} className={styles.calendarImage}></Image> 
                <Form className='d-flex flex-column m-4 justify-content-center'>

                    <h1 className='text-center'>Change Password</h1>

                    <Form.Group className={styles.formGroup} controlId="formBasicPassword">

                        <FloatingLabel controlId="floatingPassword" label="NewPassword">
                            <Form.Control
                                type="password"
                                placeholder="NewPassword"
                                name="NewPassword"
                                className="form-control"
                                onBlur={(e) => this.handleBlur(e)}
                                onFocus={(e) => this.handleFocus(e)}
                            />
                            <span className="text-danger">{this.state.newPasswordErr}</span>

                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className={styles.formGroup} controlId="formBasicPassword">

                        <FloatingLabel controlId="floatingPassword" label="ConfirmPassword">
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="ConfirmPassword"
                                className="form-control"
                                onBlur={(e) => this.handleBlur(e)}
                                onFocus={(e) => this.handleFocus(e)}
                            />

                            <span className="text-danger">{this.state.confirmPasswordErr}</span>
                        </FloatingLabel>
                    </Form.Group>

                    <Button
                        variant="primary"
                        className={styles.button}
                        onClick={(e) => this.handleSubmit(e)}
                        onKeyPress={(e) => this.handleKeyPress(e)}
                    >
                        Reset Password
                    </Button>

                </Form>
            </div>

        )
    }
}

export default ChangePass;