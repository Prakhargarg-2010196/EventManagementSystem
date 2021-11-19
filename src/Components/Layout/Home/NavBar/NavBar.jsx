import { Container, Image, Nav, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Logo from "../../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import authService from "../../../../api/services/auth.service";
import styles from "./NavBar.module.css";
import userService from "../../../../api/services/user.service";

export const NavBar = () => {
	const [result, setResult] = useState("");
	useEffect(() => {
		if (authService.isAuthenticated()) {
			userService.getUserBoard().then((res) => {
				let result = res.data.letter;
				if (res.data.letter) {
					result = result.toUpperCase();
					setResult(result);
				}
			});
		}
	}, []);

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			className={styles.NavBar}
		>
			<Container>
				<Navbar.Brand>
					<NavLink to="/" className={styles.navLinks}>
						<Image src={Logo} className={styles.logo}></Image>
					</NavLink>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav justify-content-lg-end">
					<Nav className="ms-auto">
						<NavLink to="/" className={styles.navLinks}>
							Home
						</NavLink>
							{authService.isAuthenticated() ? (
						<NavLink to="/DashBoard" className={styles.navLinks}>
								<Avatar
									sx={{
										bgcolor: "aliceblue",
										width: 28,
										height: 29,
										color: "black",
									}}
									variant="square"
								>
									{result}
								</Avatar>
						</NavLink>
							) : (
								<NavLink to="/LogInPage" className={styles.navLinks}>
									Login
								</NavLink>
							)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
