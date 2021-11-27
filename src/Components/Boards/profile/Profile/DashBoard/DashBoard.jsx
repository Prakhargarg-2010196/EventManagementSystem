import "react-calendar/dist/Calendar.css";
import "react-toastify/dist/ReactToastify.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

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
			message: "",
			successful: "",
			created: [],
			registered: [],
			bookmarked: [],
		};
	}
	async componentDidMount() {
		await userService.getUserBoard().then(
			(res) => {
				const result = res.data.user;
				const createdEvents = res.data.user.event;
				const registeredEvents = res.data.user.registeredEvents;
				const bookmarkedEvents = res.data.user.bookmarked;
				this.setState({
					result: result,
					created: createdEvents,
					registered: registeredEvents,
					bookmarked: bookmarkedEvents,
				});
			},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage = JSON.stringify(error.message).replace(/^"|"$/g, "");
				} else resMessage = error.response.data;

				this.setState({
					successful: false,
					message: resMessage,
				});
				toast.error(this.state.message, {
					position: "bottom-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					style: { background: "pink", color: "black" },
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
									<Cards
										name={this.state.result.name}
										email={this.state.result.email}
									/>

									<Calendar
										onChange={this.state.date}
										className={styles.Calendar}
									/>
								</div>
								<Row>
									<div className={styles.cardContainer}>
										<div className={styles.card}>
											<div className={styles.cardTitle}>Created Events</div>
											<div className={styles.cardBody}>
												<span>{this.state.created.length} </span>
											</div>
										</div>

										<div className={styles.card}>
											<div className={styles.cardTitle}>Bookmarked Events</div>
											<div className={styles.cardBody}>
												<span>{this.state.bookmarked.length} </span>
											</div>
										</div>

										<div className={styles.card}>
											<div className={styles.cardTitle}>Registered Events</div>
											<div className={styles.cardBody}>{this.state.registered.length}</div>
										</div>
									</div>
								</Row>
							</Col>
						</Row>

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
					</Container>
				</div>
			</>
		);
	}
}
