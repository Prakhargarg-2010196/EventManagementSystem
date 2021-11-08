import { Button, FloatingLabel, Form } from 'react-bootstrap';
import React, { Component } from 'react';

import AuthService from '../../../api/services/auth.service';
import CalendarMobile from "../../../assets/CalendarMobile.svg"
import { DefaultNavbar } from '../DefaultNavbar';
import { Image } from 'react-bootstrap';
import Logo from "../../../assets/logo.png";
import styles from './ChangePass.module.css';

const links = {
    home: '/',
    secondLink: "/LogInPage",
    secondLinkName:"login"
}
const style={
    Navbar:styles.Navbar,
    navLinks:styles.navLinks

}    
const image={
    src:Logo,
    width:40
}
class ChangePass extends Component {
    defaultState = {
        newPassword: "",
        confirmPassword: "",
        newPasswordErr: "",
        confirmPasswordErr: "",
        successful: false,
        message: "",
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
        const details = {
            newpass: this.state.newPassword,
            email: this.props.history.location.state.email,
        }
        AuthService.NewPassword(details).then((response) => {
            if (response.status === 200) {
                this.setState({
                    message: response.data,
                    successful: true,
                });
            }

            if (this.state.successful) {
                this.props.history.push("/LoginPage");
            }
        },
            (error) => {
                if (error.response.status === 403) {
                    this.setState({
                        message: error.response.data,
                        successful: false,
                    });
                    
                } else if (error.response.status === 422) {
                    this.setState({
                        message: error.response.data + "Enter Again",
                        successful: false,
                    });

                }
                else if (error.response.status === 403 || error.response.status === 401) {
                    this.setState({
                        message: error.response.data,
                        successful: false,
                    });
                    setTimeout({

                    }, 5000);
                }
            })
    }
    handleKeyPress(e) {

        if (e.key === "Enter")
            e.preventDefault();
    }


    render() {
        return (
            <div className={styles.container}>
                < DefaultNavbar style={style}  image={image} links = {links}/>
                <Image src={CalendarMobile} className={styles.calendarImage}></Image>
                {
                    !this.state.successful && (<Form className='d-flex flex-column m-4 justify-content-center'>

                        <h1 className='text-center'>Change Password</h1>

                        <Form.Group className={styles.formGroup} controlId="formBasicPassword">

                            <FloatingLabel controlId="floatingPassword" label="newPassword">
                                <Form.Control
                                    type="password"
                                    placeholder=""
                                    name="newPassword"
                                    className="form-control"
                                    onBlur={(e) => this.handleBlur(e)}
                                    onFocus={(e) => this.handleFocus(e)}
                                />
                                <span className="text-danger">{this.state.newPasswordErr}</span>

                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className={styles.formGroup} controlId="formBasicPassword">

                            <FloatingLabel controlId="floatingPassword" label="confirmPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
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
                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                    </Form>)}
            </div>

        )
    }
}

export default ChangePass;