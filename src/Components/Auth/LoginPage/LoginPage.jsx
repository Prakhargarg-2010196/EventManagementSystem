import './LoginPage.css';

import * as Yup from "yup";

import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { ErrorMessage, Field, Formik } from "formik";
import React, { Component } from 'react';

import AuthService from '../../../services/auth.service';
import { Link } from 'react-router-dom';

class LoginPage extends Component {



    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value });
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    validationSchema() {
        return Yup.object().shape({
            email: Yup.string().required('Email is required').email('Email is invalid'),
      password: Yup.string()
        .required('Password is required').min(6, 'Password must be at least 6 characters').max(40, 'Password must not exceed 40 characters'),
        });
    }


    handleLogin(e) {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });

        AuthService.login(this.state.username, this.state.password).then(
            () => {
                this.props.history.push("/profile");
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }





    render() {
        return (
            <div>
                <Formik
                    initialValues={this.initialValues}
                    validationSchema={this.validationSchema}
                    onSubmit={this.handleLogin}

                >
                    <Form className='d-flex flex-column justify-content-center'>
                        <h1 className=''>LogIn</h1>
                        
                            <Form.Group className="mb-3 form-group " controlId="email">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Field
                                        type="text"
                                        name="email"
                                        className='form-control'
                                        placeholder=""
                                        value={this.state.username}
                                        onChange={this.onChangeUsername} />
                                
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="alert alert-danger" />

                                </FloatingLabel>

                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        


                        <Form.Group className="mb-3 form-group " controlId="formBasicPassword">
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Field
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Link to="/PasswordResetPage" className="align-self-end">
                            <Form.Text >Forgot Password?</Form.Text>
                        </Link>
                        <Button
                            variant="primary"
                            className='mb-2 w-50'
                            type="submit"
                            disabled={this.state.loading}>
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}

                            Login
                        </Button>
                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <Form.Text style={{ display: "" }}>Don't have an account ?</Form.Text>
                        <Link to="/SignUpPage">
                            <Form.Text>Sign Up</Form.Text>
                        </Link>
                    </Form>
                </Formik>


            </div>


        )
    }
}

export default LoginPage;