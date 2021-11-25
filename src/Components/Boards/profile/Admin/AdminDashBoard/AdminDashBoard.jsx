import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { AdminSideBar } from "../AdminSidebar/AdminSideBar";
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
								<div className={styles.CalendarContainer}>
									<Cards />
									<Calendar
										onChange={this.state.date}
										className={styles.Calendar}
									/>
								</div>
								<div className={styles.cardContainer}>
									<div className={styles.card}>
										<div className={styles.cardTitle}>Booked Events</div>
										<div className={styles.cardBody}>
											<span>120 </span>
										</div>
									</div>

									<div className={styles.card}>
										<div className={styles.cardTitle}>Rated Events</div>
										<div className={styles.cardBody}>
											<span>120 </span>
										</div>
									</div>

									<div className={styles.card}>
										<div className={styles.cardTitle}>Suggested Events</div>
										<div className={styles.cardBody}>120</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}
