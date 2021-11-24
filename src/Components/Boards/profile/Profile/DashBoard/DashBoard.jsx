import "react-calendar/dist/Calendar.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import Calendar from "react-calendar";
import Cards from "./card.jsx";
import { NavBar } from "../../../../Layout/Home/NavBar/NavBar";
import { SideBar } from "../SideBar/sidebar";
import styles from "./DashBoard.module.css";
import userService from "../../../../../api/services/user.service.js";

export default class DashBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			result: {},
			isLoading: true,
		};
	}
	async componentDidMount() {
		await userService.getUserBoard().then(
			(res) => {
				const result = res.data.user;
				this.setState({ result: result });
			},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage = JSON.stringify(error.message);
				} else resMessage = error.response.data;

				this.setState({
					successful: false,
					message: resMessage,
				});
			}
		);
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
								<div className={styles.CalendarContainer}>
										<Cards name={this.state.result.name} email={this.state.result.email} />
									
										<Calendar
											onChange={this.state.date}
											className={styles.Calendar}
										/>
								</div>
								<Row>
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
								</Row>
							</Col>
						</Row>
						{this.state.message && (
							<div className="form-group mt-4">
								<div className="alert alert-danger" role="alert">
									{this.state.message}
								</div>
							</div>
						)}
					</Container>
				</div>
			</>
		);
	}
}
