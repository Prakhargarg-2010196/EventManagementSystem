import { Button, FloatingLabel, Form } from "react-bootstrap";
import React, { Component } from "react";

import AuthService from "../../../api/services/auth.service";
import CalendarMobile from "../../../assets/CalendarMobile.svg";
import { DefaultNavbar } from "../DefaultNavbar";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import styles from "./LoginPage.module.css";

const links = {
    home: '/',
    secondLink: "/SignUpPage",
	secondLinkName:"SignUp"
}
const style={
    Navbar:styles.Navbar,
    navLinks:styles.navLinks

}    
const image={
    src:Logo,
    width:40
}
class LoginPage extends Component {
	defaultState = {
		email: "",
		password: "",
		message: "",
		emailErr: "",
		passErr: "",
		successful:false,
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
		let passErr = "";

		if (!this.state.email || regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (this.state.password<8)
			passErr = "Pass Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";
		if (!this.state.password) passErr = "Pass field is required";

		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			emailErr,
			passErr,
		});
	}

	handleFocus(e) {
		e.preventDefault();
		const regEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
		let emailErr = "";
		let passErr = "";

		if (!this.state.email || regEmail.test(this.state.email) === false)
			emailErr = "Email Field is Invalid ";
		if (this.state.password< 8)
			passErr = "Pass Field is Invalid ";
		if (!this.state.email) emailErr = "Email field is required";
		if (!this.state.password) passErr = "Pass field is required";

		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
			emailErr,
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
				if (response.data.token) {
					const { token } = response.data;
					localStorage.setItem("user2", JSON.stringify(token));
					localStorage.setItem("isAuthenticatedLogin",true);
				}
				
				if (this.state.successful) {
					
					this.props.history.push("/DashBoard");
				}
                
			},
			(error) => {
				let resMessage = "";
				if(!error.response){
					resMessage=JSON.stringify(error.message).replace(/^"|"$/g, '');
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
                < DefaultNavbar style={style}  image={image} links = {links}/>

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
						<Link to="/PasswordResetPage" className="align-self-end">
							<Form.Text>Forgot Password?</Form.Text>
						</Link>
						<Button
							variant="primary"
							className={styles.buttonSignUp}
							onClick={(e) => this.handleSubmit(e)}
							onKeyPress={(e) => this.handleKeyPress(e)}
						>
							Login
						</Button>
						
						{this.state.message && (
							<div className="form-group mt-2">
								<div className="alert alert-danger " role="alert">
									{this.state.message}
								</div>
							</div>
						)}
						<Form.Text>Don't have an account ?</Form.Text>
						<Link to="/SignUpPage">
							<Form.Text>Sign up</Form.Text>
						</Link>
					</Form>
				)}
			</div>
		);
	}
}

export default LoginPage;
