import "react-toastify/dist/ReactToastify.css";

import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import AuthService from "../../../api/services/auth.service";
import { BaseUrl } from "../../../api/services/BaseUrl";
import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { DefaultNavbar } from "../DefaultNavbar";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import styles from "./LoginPage.module.css";

const links = {
	home: "/",
	secondLink: "/SignUpPage",
	secondLinkName: "SignUp",
};
const style = {
	Navbar: styles.Navbar,
	navLinks: styles.navLinks,
};
const image = {
	src: Logo,
	width: 40,
};
class LoginPage extends Component {
	defaultState = {
		email: "",
		password: "",
		message: "",
		emailErr: "",
		passErr: "",
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
	handleBlurEmail() {
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		let emailErr = "";

		if (regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (this.state.email === "") emailErr = "Email field is required";

		this.setState({
			...this.state,
			emailErr,
		});
	}
	handleBlurPassword() {
		let passErr = "";

		if (this.state.password && this.state.password.length < 8) {
			passErr = "Pass Field is Invalid ";
		}

		if (!this.state.password) passErr = "Pass field is required";

		this.setState({
			...this.state,
			passErr,
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		this.handleKeyPress(e);

		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		await AuthService.LogIn(user).then(
			(response) => {
				this.setState({
					message: response.data,
					successful: true,
				});

				const { userId } = response.data;
				console.log(userId);
				if (response.data.token && userId === 100) {
					const { token } = response.data;
					localStorage.setItem("isAuthenticatedAdminLogin", true);
					localStorage.setItem("user2", JSON.stringify(token));
					this.props.history.push("/AdminDashBoard");
				} else if (response.data.token && userId !== 100) {
					const { token } = response.data;
					localStorage.setItem("user2", JSON.stringify(token));
					localStorage.setItem("isAuthenticatedLogin", true);
					this.props.history.push("/DashBoard");
				}
			},
			(error) => {
				let resMessage = "";
				if (!error.response || !BaseUrl()) {
					resMessage = JSON.stringify(error.message).replace(/^"|"$/g, "");
				} else if (error.response.status === 401) {
					resMessage = error.response.data;
				} else if (error.response.status === 402) {
					resMessage = error.response.data + " Enter Again";
				} else if (error.response.status === 403) {
					resMessage = error.response.data;
					localStorage.removeItem("user2");
					localStorage.removeItem("isAuthenticatedLogin");
				}
				this.setState({
					successful: false,
					message: resMessage,
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
						<h1 className="text-center">LogIn</h1>
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
						<Form.Group
							className={styles.formGroup}
							controlId="formBasicPassword"
						>
							<span className="small">
								Password must be at least 8 characters long
							</span>
							<FloatingLabel controlId="floatingPassword" label="Password">
								<Form.Control
									type="password"
									placeholder="Password"
									name="password"
									className="form-control"
									onChange={(e) => this.handleChange(e)}
									onBlur={() => this.handleBlurPassword()}
								/>
								{<span className="text-danger">{this.state.passErr}</span>}
							</FloatingLabel>
						</Form.Group>
						<Link to="/PasswordResetPage" className="align-self-end">
							<Form.Text style={{ color: "#000" }}>Forgot Password?</Form.Text>
						</Link>
						<Button
							variant="primary"
							className={styles.buttonSignUp}
							onClick={(e) => this.handleSubmit(e)}
							onKeyPress={(e) => this.handleKeyPress(e)}
						>
							Login
						</Button>

						<Form.Text>Don't have an account ?</Form.Text>
						<Link to="/SignUpPage">
							<Form.Text style={{ color: "#000" }}>Sign up</Form.Text>
						</Link>
					</Form>
				)}
				{this.state.message&& (
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
			</div>
		);
	}
}

export default LoginPage;
