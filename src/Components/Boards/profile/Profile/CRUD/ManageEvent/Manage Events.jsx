import "react-toastify/dist/ReactToastify.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import Button from "@mui/material/Button";
import CrudService from "api/services/crud-service";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Loader } from "Components/Layout/Loader/Loader";
import { NavBar } from "Components/Layout/Home/NavBar/NavBar";
import Paper from "@mui/material/Paper";
import { SideBar } from "Components/Boards/profile/Profile/SideBar/sidebar";
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
		successful: false,
		message: "",
	};

	constructor(props) {
		super(props);
		this.state = this.defaultState;
	}
	async componentDidMount() {
		this.setState({ isLoading: true });

		await CrudService.ReadEvents().then(
			(response) => {
				if (response.data) this.setState({ events: response.data });
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
		await CrudService.Delete(eventItemId).then(
			(res) => {},

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
		alert("Deleted");
		this.setState({
			events: this.state.events.filter((event) => event._id !== eventItemId),
		});
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
										<h1 className="text-center mt-4">Manage Events</h1>
										<TableContainer  component={Paper}>
											{this.state.isLoading ? (
												<Loader message={"Your Content is Loading"} />
											) : (
												<Table 	className={styles.table} aria-label="simple table">
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
																		<strong>
																			<u>{eventItem.title}</u>
																		</strong>
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
																		color="error"
																		onClick={(e) => {
																			window.confirm(
																				"Are you sure you wish to delete this event?"
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
									
									{/* </Row> */}
								{/* </Container> */}
							</Col>
						</Row>
					</Container>
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
				</div>
			</>
		);
	}
}
