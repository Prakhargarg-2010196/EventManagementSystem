import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { Component } from "react";

import AuthService from "../../../../api/services/auth.service";
import CalendarMobile from "../../../../assets/CalendarMobile.svg";
import { DefaultNavbar } from "../../DefaultNavbar";
import { Image } from "react-bootstrap";
import Logo from "../../../../assets/logo.png";
import styles from "./OtpPasswordReset.module.css";

const links = {
	home: "/",
	secondLink: "/SignUpPage",
	secondLinkName: "signup",
};
const style = {
	Navbar: styles.Navbar,
	navLinks: styles.navLinks,
};
const image = {
	src: Logo,
	width: 40,
};
class OtpPasswordReset extends Component {
	defaultState = {
		otp: "",
		otpErr: "",
		message: "",
		successful: false,
	};
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.state = this.defaultState;
		this.handleResendOtp = this.handleResendOtp.bind(this);
	}

	handleBlur(e) {
		const regOtp = /\d*/;
		let otpErr = "";

		if (!this.state.otp || regOtp.test(this.state.otp) === false)
			otpErr = "otp is invalid";
		if (this.state.otp.length !== 6 && this.state.otp)
			otpErr = "otp is invalid";
		if (!this.state.otp) otpErr = "otp is required";
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			otpErr,
		});
	}

	handleFocus(e) {
		e.preventDefault();
		const regOtp = /\d*/;
		let otpErr = "";
		if (!this.state.otp || regOtp.test(this.state.otp) === false)
			otpErr = "otp is invalid";
		if (!this.state.otp) otpErr = "otp is required";
		if (this.state.otp.length !== 6 && this.state.otp)
			otpErr = "otp is invalid";
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			otpErr,
		});
	}

	handleResendOtp = async (e) => {
		e.preventDefault();
		this.handleKeyPress(e);
		const user = {
			email: this.props.history.location.state.email,
		};
		await AuthService.ResetPass(user).then(
			(res) => {},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage = JSON.stringify(error.message).replace(/^"|"$/g, "");
				} else resMessage = error.response.data;
				this.setState({
					message: resMessage,
					successful: false,
				});
			}
		);
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		this.handleKeyPress(e);
		const otp = {
			otp: this.state.otp,
			email: this.props.history.location.state.email,
		};
		const details = {
			email: this.props.history.location.state.email,
		};

		AuthService.VerifyResetPassOtp(otp).then(
			(response) => {
				if (response.status === 200) {
					this.setState({
						message: response.data,
						successful: true,
					});
				}

				if (this.state.successful) {
					this.props.history.push({
						pathname: "/ChangePass",
						state: details,
					});
				}
			},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage = JSON.stringify(error.message).replace(/^"|"$/g, "");
					this.setState({
						message: resMessage,
						successful: false,
					});
				} else if (error.response.status === 401) {
					this.setState({
						message: error.response.data,
						successful: false,
					});
				} else if (error.response.status === 402) {
					this.setState({
						message: error.response.data + "\nEnter Again",
						successful: false,
					});
				} else {
					resMessage = error.response.data;
					this.setState({
						message: resMessage,
						successful: false,
					});
				}
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
						<h2 className="text-center">OTP</h2>
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
						<Button
							variant="primary"
							className={styles.buttonSignUp}
							onClick={(e) => this.handleResendOtp(e)}
							onKeyPress={(e) => this.handleKeyPress(e)}
						>
							resend otp
						</Button>
						{this.state.message && (
							<div className="form-group mt-4">
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

export default OtpPasswordReset;
