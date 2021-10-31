import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import React, { Component } from "react";

import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import styles from "./PasswordReset.module.css";

export const PasswordResetNavbar = () => {
	return (
		<Navbar expand="lg" className={styles.Navbar} variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<Image src={Logo} width={40}></Image>
					</Link>
				</Navbar.Brand>
				<Nav>
					<Link to="/signUpPage" className={styles.navLinks}>
						Sign Up
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
class PasswordReset extends Component {
	defaultState = {
		email: "",
		otp: "",
		emailErr: "",
		otpErr: "",
	};
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.state = this.defaultState;
	}

	handleBlur(e) {
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		const regOtp=/\d*/  ;
		let emailErr = "";
		let otpErr = "";

		if (!this.state.email || regEmail.test(this.state.email) === false)
        emailErr = "Email Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";
        
        if (!this.state.otp || regOtp.test(this.state.otp) === false)
            otpErr = "otp is invalid";
        if (this.state.otp.length !== 6&& this.state.otp) 
        otpErr = "otp is invalid";
        if (!this.state.otp) otpErr = "otp is required";
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			emailErr,
			otpErr,
		});
	}

	handleFocus(e) {
		e.preventDefault();
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		const regOtp=/\d*/  ;
        let emailErr = "";
		let otpErr = "";
		if (!this.state.email || regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";
		if (!this.state.otp || regOtp.test(this.state.otp) === false)
			otpErr = "otp is invalid";
		if (!this.state.otp) otpErr = "otp is required";
        if (this.state.otp.length !== 6 && this.state.otp) 
        otpErr = "otp is invalid";
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			emailErr,
			otpErr,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.handleKeyPress(e);
	}
	handleKeyPress(e) {
		if (e.key === "Enter") e.preventDefault();
	}

	render() {
		return (
			<div className={styles.body}>
				<PasswordResetNavbar />
				<Image src={CalendarMobile} className={styles.calendarImage}></Image>
				<Form className={styles.form}>
					<h2 className="text-center">Forgot Password</h2>

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
					<Form.Group className={styles.formGroup} controlId="formBasicOtp">
						<FloatingLabel controlId="floatingInput" label="otp">
							<Form.Control
								type="password"
								placeholder="otp"
								name="otp"
								className="form-control"
								onBlur={(e) => this.handleBlur(e)}
								onFocus={(e) => this.handleFocus(e)}
							/>
							<span className="text-danger">{this.state.otpErr}</span>
						</FloatingLabel>
					</Form.Group>

					<Button
						variant="primary"
                        className={styles.buttonSignUp}
						onClick={(e) => this.handleSubmit(e)}
						onKeyPress={(e) => this.handleKeyPress(e)}
					>
						Confirm
					</Button>
				</Form>
			</div>
		);
	}
}

export default PasswordReset;
