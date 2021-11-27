import "react-toastify/dist/ReactToastify.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import CrudService from "../../../../../api/services/crud-service";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Loader } from "../../../../Layout/Loader/Loader";
import { NavBar } from "../../../../Layout/Home/NavBar/NavBar";
import Paper from "@mui/material/Paper";
import { SideBar } from "../SideBar/sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./RegisteredEvents.module.css";

export default class RegisteredEvents extends Component {
	defaultState = {
		events: [],
		message: "",
		successful: false,
		isLoading: true,
	};

	constructor(props) {
		super(props);
		this.state = this.defaultState;
	}
	async componentDidMount() {
		await CrudService.RegisteredEvents().then(
			(response) => {
				this.setState({ events: response.data });
				this.setState({
					successful: true,
				});
			},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage = JSON.stringify(error.message).replace(/^"|"$/g, "");
				} else resMessage = error.response.data;
				this.setState({
					message: resMessage,
					successful: false,
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
										<h1 className="text-center mt-4">Registered Events</h1>
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
															</TableRow>
														))}
													</TableBody>
												</Table>
											)}
										</TableContainer>
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
