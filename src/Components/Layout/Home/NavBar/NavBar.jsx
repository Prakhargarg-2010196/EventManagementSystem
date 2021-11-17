import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Logo from "../../../../assets/logo.png";
import authService from "../../../../api/services/auth.service";
import styles from "./NavBar.module.css";
import userService from "../../../../api/services/user.service";

export const NavBar = () => {
	const [result, setResult] = useState();
	useEffect(() => {
		userService.getUserBoard().then((res) => {
			const result = res.data.letter;
			setResult(result.toUpperCase());
		});
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
						<NavLink to="/DashBoard" className={styles.navLinks}>
							{authService.isAuthenticated() ? (
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
							) : (
								<NavLink to="/LogInPage" className={styles.navLinks}>
									Login
								</NavLink>
							)}
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
