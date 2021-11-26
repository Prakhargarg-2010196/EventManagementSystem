import "react-toastify/dist/ReactToastify.css";

import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import AuthService from "../../../api/services/auth.service";
import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { DefaultNavbar } from "../DefaultNavbar";
import { Image } from "react-bootstrap";
import Logo from "../../../assets/logo.png";
import styles from "./PasswordReset.module.css";

const links = {
	home: "/",
	secondLink: "/LogInPage",
	secondLinkName: "login",
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
		successful: false,
	};
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = this.defaultState;
	}
	handleChange(e) {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	}
	handleBlurEmail(e) {
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		let emailErr = "";

		if (!this.state.email || regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";

		this.setState({
			...this.state,

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
					if (this.state.successful)
						this.props.history.push({
							pathname: "/OtpPasswordReset",
							state: details,
						});
				}
			},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage = JSON.stringify(error.message).replace(/^"|"$/g, "");
				} else resMessage = error.response.data;
				this.setState({
					message: resMessage,
					successful: false,
				});
				toast.error(this.state.message, {
					position: "bottom-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					style: { background: "pink", color: "black" },
				});
			}
		);
	}
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
									onChange={(e) => this.handleChange(e)}
									onBlur={(e) => this.handleBlurEmail(e)}
								/>
								<span className="text-danger">{this.state.emailErr}</span>
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
						{/* {this.state.message && (
							<div className="form-group mt-4">
								<div className="alert alert-danger" role="alert">
									{this.state.message}
								</div>
							</div>
						)} */}
						{this.state.message && (
							<ToastContainer
								position="bottom-center"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						)}
					</Form>
				)}
			</div>
		);
	}
}

export default PasswordReset;
