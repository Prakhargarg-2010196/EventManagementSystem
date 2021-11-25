import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import Button from "@mui/material/Button";
import CrudService from "../../../../../../api/services/crud-service";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Loader } from "../../../../../Layout/Loader/Loader";
import { NavBar } from "../../../../../Layout/Home/NavBar/NavBar";
import Paper from "@mui/material/Paper";
import { SideBar } from "../../SideBar/sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./ManageEvents.module.css";

export default class ManageEvent extends Component {
	defaultState = {
		events: [],
		isLoading: true,
	};

	constructor(props) {
		super(props);
		this.state = this.defaultState;
	}
	async componentDidMount() {
		await CrudService.ReadEvents().then(
			(response) => {
				this.setState({ events: response.data });
			},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					console.log(JSON.stringify(error.message));
				}

				resMessage = error.response.data;

				this.setState({
					successful: false,
					message: resMessage,
				});
			}
		);
		this.setState({ isLoading: false });
	}
	onUpdate(e, eventItemId) {
		e.preventDefault();
		this.props.history.push({
			pathname: `/UpdateEvent/${eventItemId}`,
		});
	}
	async onDelete(e, eventItemId) {
		e.preventDefault();
		// this.setState({ isLoading: true });
		await CrudService.Delete(eventItemId);
		this.setState({
			events: this.state.events.filter((event) => event._id !== eventItemId),
		});
		// await CrudService.ReadEvents().then(
		// 	(response) => {
		// 		this.setState({ events: response.data });
		// 	},
		// 	(error) => {
		// 		let resMessage = "";
		// 		if (!error.response) {
		// 			resMessage = JSON.stringify(error.message);
		// 		}

		// 		else resMessage = error.response.data;

		// 		this.setState({
		// 			successful: false,
		// 			message: resMessage,
		// 		});
		// 	}
		// );
		// this.setState({ isLoading: false });
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
										<h1 className="text-center mt-4">Manage Events</h1>
									</Row>
									<Row>
										<TableContainer component={Paper}>
											{this.state.isLoading ? (
												<Loader message={"Your Content is Loading"} />
											) : (
												<Table sx={{ minWidth: 650 }} aria-label="simple table">
													<TableHead>
														<TableRow>
															<TableCell align="center">Event Name</TableCell>
															<TableCell align="center">Category</TableCell>
															<TableCell align="center">Cost</TableCell>
															<TableCell align="center">Date & Time</TableCell>
															<TableCell align="center">Edit</TableCell>
															<TableCell align="center">Delete</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{this.state.events.length === 0 && (
															<div className=" d-flex justify-content-center  bg-white">
																<h1>No such events</h1>
															</div>
														)}
														{this.state.events.map((eventItem) => (
															<TableRow
																key={eventItem._id}
																sx={{
																	"&:last-child td, &:last-child th": {
																		border: 0,
																	},
																}}
															>
																<TableCell align="center">
																	<Link
																		to={{
																			pathname: `/EventPage/${eventItem._id}`,
																		}}
																	>
																		{eventItem.title}
																	</Link>
																</TableCell>
																<TableCell align="center">
																	{eventItem.category.join(",")}
																</TableCell>
																<TableCell align="center">
																	{eventItem.rate}
																</TableCell>
																<TableCell align="center">
																	{eventItem.date.split("T")[0]} &{" "}
																	{eventItem.time}
																</TableCell>
																<TableCell align="center">
																	<Button
																		variant="contained"
																		onClick={(e) => {
																			this.onUpdate(e, eventItem._id);
																		}}
																	>
																		Edit
																	</Button>
																</TableCell>

																<TableCell align="center">
																	<Button
																		variant="contained"
																		onClick={(e) => {
																			window.confirm(
																				"Are you sure you wish to delete this item?"
																			) && this.onDelete(e, eventItem._id);
																		}}
																	>
																		Delete
																	</Button>
																</TableCell>
															</TableRow>
														))}
													</TableBody>
												</Table>
											)}
										</TableContainer>
										{this.state.message && (
											<div className="form-group mt-4">
												<div className="alert alert-danger" role="alert">
													{this.state.message}
												</div>
											</div>
										)}
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
