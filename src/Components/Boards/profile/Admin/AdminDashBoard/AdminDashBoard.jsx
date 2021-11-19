import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import {AdminSideBar} from "../AdminSidebar/AdminSideBar";
import Calendar from "react-calendar/dist/umd/Calendar";
import Cards from "../card.jsx";
import { NavBar } from "../../../../Layout/Home/NavBar/NavBar";
import styles from "./AdminDashBoard.module.css";

// import userService from "../../../../../api/services/user.service";

export default class AdminDashBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			result: {},
		};
	}
	componentDidMount() {
		// userService.getAdminBoard().then((res)=>{
		// 	const result=res.data;
		// 	this.setState({result});
		// })
	}

	render() {
		return (
			<>
				<div className={styles.container}>
					<NavBar />
					<Container fluid>
						<Row>
							<Col md={2} className={styles.SideBar}>
								<AdminSideBar />
							</Col>
							<Col md={10}>
								<Row>
									<Col md={6}>
										<Cards />
									</Col>
									<Col md={6}>
										<Calendar
											onChange={this.state.date}
											className={styles.Calendar}
										/>
									</Col>
								</Row>
								<Row>
									<Col md={4}>
										<div className={styles.card}>
											<div className={styles.cardTitle}>Booked Events</div>
											<div className={styles.cardBody}>
												<span>120 </span>
											</div>
										</div>
									</Col>
									<Col md={4}>
										<div className={styles.card}>
											<div className={styles.cardTitle}>Rated Events</div>
											<div className={styles.cardBody}>
												<span>120 </span>
											</div>
										</div>
									</Col>

									<Col md={4}>
										<div className={styles.card}>
											<div className={styles.cardTitle}>Suggested Events</div>
											<div className={styles.cardBody}>120</div>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}
