import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { Component } from "react";

import AuthService from "../../../api/services/auth.service";
import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { DefaultNavbar } from "../DefaultNavbar";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../../assets/logo.png";
import styles from "./SignUpPage.module.css";

const links = {
	home: "/",
	secondLink: "/LogInPage",
	secondLinkName:"Login"
};
const style = {
	Navbar: styles.Navbar,
	navLinks: styles.navLinks,
};
const image = {
	src: Logo,
	width: 40,
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
		successful: false,
	};
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.state = this.defaultState;
	}

	validate() {
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		let usernameErr = "";
		let emailErr = "";
		let passErr = "";
		if (!this.state.username) usernameErr = "username field is required";
		if (this.state.username.length > 9)
			usernameErr = "username field is invalid";
		if (!this.state.email || regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (this.state.password.length < 8)
			passErr = "Pass Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";
		if (!this.state.password) passErr = "Pass field is required";

		return { usernameErr, emailErr, passErr };
	}

	handleBlur(e) {
		const errors = this.validate();
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			usernameErr: errors.usernameErr,
			emailErr: errors.emailErr,
			passErr: errors.passErr,
		});
	}
	handleFocus(e) {
		const errors = this.validate();
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			usernameErr: errors.usernameErr,
			emailErr: errors.emailErr,
			passErr: errors.passErr,
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		this.handleKeyPress(e);
		const user = {
			name: this.state.username,
			password: this.state.password,
			email: this.state.email,
		};
		await AuthService.SignUp(user).then(
			(response) => {
				this.setState({
					message: response.data,
					successful: true,
				});

				if (this.state.successful) {
					this.props.history.push({
						pathname: "/OtpSignUp",
						state: user,
					});
				}
			},
			(error) => {
				let resMessage = "";
				if(!error.response){
					resMessage=JSON.stringify(error.message);
				}
				else
				{
						resMessage=error.response.data;
				} 
					
				
				this.setState({
					successful: false,
					message: resMessage,
				});
			}
		);
	};
	handleKeyPress(e) {
		if (e.key === "Enter") e.preventDefault();
	}

	render() {
		return (
			<div className={styles.container}>
				<DefaultNavbar style={style} image={image} links={links} />
				
				<Image src={CalendarMobile} className={styles.calendarImage}></Image>
				{!this.state.successful && (
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
									onFocus={(e) => this.handleFocus(e)}
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
									onFocus={(e) => this.handleFocus(e)}
									onBlur={(e) => this.handleBlur(e)}
								/>
								<span className="text-danger">{this.state.emailErr}</span>
							</FloatingLabel>

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
									onFocus={(e) => this.handleFocus(e)}
								/>

								<span className="text-danger">{this.state.passErr}</span>
							</FloatingLabel>
						</Form.Group>

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
						{this.state.message && (
					<div className="form-group mt-2">
						<div
							className={
								this.state.successful
									? "alert alert-success"
									: "alert alert-danger"
							}
							role="alert"
						>
							{this.state.message}
						</div>
					</div>
				)}
					</Form>
					
				)}
				
			</div>
		);
	}
}
export default SignUpPage;
