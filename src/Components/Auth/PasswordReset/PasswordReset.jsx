import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { Component } from "react";

import AuthService from "../../../api/services/auth.service";
import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { DefaultNavbar } from "../DefaultNavbar";
import { Image } from "react-bootstrap";
import Logo from "../../../assets/logo.png";
import styles from "./PasswordReset.module.css";

const links = {
	home: "/",
	secondLink: "/LogInPage",
	secondLinkName:"login"
};
const style = {
	Navbar: styles.Navbar,
	navLinks: styles.navLinks,
};
const image = {
	src: Logo,
	width: 40,
};
class PasswordReset extends Component {
	defaultState = {
		email: "",
		emailErr: "",
	};
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.state = this.defaultState;
	}

	handleBlur(e) {
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		let emailErr = "";

		if (!this.state.email || regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";

		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			emailErr,
		});
	}

	handleFocus(e) {
		e.preventDefault();
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		let emailErr = "";
		if (!this.state.email || regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";

		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			emailErr,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.handleKeyPress(e);
		const details = {
			email: this.state.email,
		};
		AuthService.ResetPass(details).then(
			(response) => {
				if (response.status === 200) {
					this.setState({
						message: response.data,
						successful: true,
					});
				}
			},
			(error) => {
				if (error.response.status === 401) {
					this.setState({
						message: error.response.data,
						successful: false,
					});
					console.log(error.response);
				}
			}
		);
		this.props.history.push({ pathname: "/OtpPasswordReset", state: details });
	}
	handleKeyPress(e) {
		if (e.key === "Enter") e.preventDefault();
	}

	render() {
		return (
			<div className={styles.container}>
				<DefaultNavbar style={style} image={image} links={links} />

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

					<Button
						variant="primary"
						className={styles.buttonSignUp}
						onClick={(e) => this.handleSubmit(e)}
						onKeyPress={(e) => this.handleKeyPress(e)}
					>
						Confirm
					</Button>
					{this.state.message && (
						<div className="form-group">
							<div className="alert alert-danger" role="alert">
								{this.state.message}
							</div>
						</div>
					)}
				</Form>
			</div>
		);
	}
}

export default PasswordReset;
