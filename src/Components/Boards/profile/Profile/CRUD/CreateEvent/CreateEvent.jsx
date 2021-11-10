// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

// const { currentUser } = this.state;

// currentUser: AuthService.getCurrentUser()
// function createData(name, calories, fat, carbs, protein) {
// 	return { name, calories, fat, carbs, protein };
// }

// const rows = [
// 	createData("event one", 159, 6.0, 24, 4.0),
// 	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// 	createData("Eclair", 262, 16.0, 24, 6.0),
// 	createData("Cupcake", 305, 3.7, 67, 4.3),
// 	createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];
import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import FormEvent from "./FormEvent/FormEvent"
// import Button from "@mui/material/Button";
import { NavBar } from "../../../../../Layout/Home/NavBar/NavBar";
// import Paper from "@mui/material/Paper";
import { SideBar } from "../../SideBar/sidebar";
import styles from "./CreateEvent.module.css";

export default class DashBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className={styles.container}>
					<NavBar />
					<Container fluid>
						<Row>
							<Col md={2} className={styles.SideBar}>
								<SideBar />
							</Col>
							<Col md={10}>
								<Container>
									<Row>
										<h1 className="text-center mt-4">Create Events</h1>
									</Row>
									<Row>
										<FormEvent/>
									</Row>
								</Container>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}
