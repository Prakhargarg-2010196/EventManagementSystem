import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { AdminSideBar } from "../AdminSidebar/AdminSideBar";
import Calendar from "react-calendar/dist/umd/Calendar";
import Cards from "../card.jsx";
import { NavBar } from "Components/Layout/Home/NavBar/NavBar";
import styles from "./AdminDashBoard.module.css";

export default class AdminDashBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
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
								<Row>
								<div className={styles.cardContainer}>
									<div className={styles.card}>
										<div className={styles.cardTitle}>Users To Be Verified</div>
										<div className={styles.cardBody}>
											<span>120 </span>
										</div>
									</div>

									<div className={styles.card}>
										<div className={styles.cardTitle}>Total Users</div>
										<div className={styles.cardBody}>
											<span>120 </span>
										</div>
									</div>

									<div className={styles.card}>
										<div className={styles.cardTitle}>Total Events</div>
										<div className={styles.cardBody}>120</div>
									</div>
								</div>
								</Row>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}
