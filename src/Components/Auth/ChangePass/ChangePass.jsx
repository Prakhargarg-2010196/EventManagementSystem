import "react-toastify/dist/ReactToastify.css";

import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import AuthService from "../../../api/services/auth.service";
import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { DefaultNavbar } from "../DefaultNavbar";
import { Image } from "react-bootstrap";
import Logo from "../../../assets/logo.png";
import styles from "./ChangePass.module.css";

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
class ChangePass extends Component {
	defaultState = {
		newPassword: "",
		confirmPassword: "",
		newPasswordErr: "",
		confirmPasswordErr: "",
		successful: false,
		message: "",
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
	handleBlurNewPass(e) {
		let newPasswordErr = "";

		if (this.state.newPassword < 8)
			newPasswordErr = "New Pass Field is Invalid";
		if (this.state.newPassword === "")
			newPasswordErr = "New Pass field is required";
		if (
			this.state.newPassword !== this.state.confirmPassword &&
			this.state.confirmPassword
		)
			newPasswordErr = "New Password doesn't matches";
		this.setState({ ...this.state, newPasswordErr });
	}
	handleBlurConfPass(e) {
		let confirmPasswordErr = "";

		if (this.state.confirmPassword < 8)
			confirmPasswordErr = "Confirm Pass Field is Invalid ";
		if (this.state.confirmPassword === "")
			confirmPasswordErr = "Confirm Pass field is required";
		if (
			this.state.confirmPassword !== this.state.newPassword &&
			this.state.newPassword
		)
			confirmPasswordErr = "Confirm Password doesn't matches ";

		this.setState({ ...this.state, confirmPasswordErr });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.handleKeyPress(e);
		const details = {
			newpass: this.state.newPassword,
			email: this.props.history.location.state.email,
		};

		AuthService.NewPassword(details).then(
			(response) => {
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
				let resMessage = "";
				console.log(error.response);
				if (!error.response) {
					resMessage = JSON.stringify(error.message).replace(/^"|"$/g, "");
					this.setState({
						message: resMessage,
						successful: false,
					});
				} else if (error.response.status === 403) {
					this.setState({
						message: error.response.data,
						successful: false,
					});
				} else if (error.response.status === 422) {
					this.setState({
						message: error.response.data + " Enter Again",
						successful: false,
					});
				} else if (
					error.response.status === 403 ||
					error.response.status === 401
				) {
					this.setState({
						message: error.response.data,
						successful: false,
					});
				} else {
					this.setState({
						message: error.response.data,
						successful: false,
					});
				}
				toast.error(this.state.message, {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					style:{background:"pink",color:"black"}
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
					<Form className="d-flex flex-column m-4 justify-content-center">
						<h1 className="text-center">Change Password</h1>
						<span className="small">
							Both passwords must be at least 8 characters long
						</span>
						<Form.Group
							className={styles.formGroup}
							controlId="formBasicPassword"
						>
							<FloatingLabel controlId="floatingPassword" label="newPassword">
								<Form.Control
									type="password"
									placeholder=""
									name="newPassword"
									className="form-control"
									onChange={(e) => this.handleChange(e)}
									onBlur={() => this.handleBlurNewPass()}
								/>
								<span className="text-danger">{this.state.newPasswordErr}</span>
							</FloatingLabel>
						</Form.Group>
						<Form.Group
							className={styles.formGroup}
							controlId="formBasicPassword"
						>
							<FloatingLabel
								controlId="floatingPassword"
								label="confirmPassword"
							>
								<Form.Control
									type="password"
									placeholder="Confirm Password"
									name="confirmPassword"
									className="form-control"
									onChange={(e) => this.handleChange(e)}
									onBlur={() => this.handleBlurConfPass()}
								/>

								<span className="text-danger">
									{this.state.confirmPasswordErr}
								</span>
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
						{/* {this.state.message && (
							<div className="mt-2 form-group">
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

export default ChangePass;
