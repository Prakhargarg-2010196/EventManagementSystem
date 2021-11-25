import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import AdminCrudService from "../../../../../api/services/admin-crud-service";
import { AdminSideBar } from "../AdminSidebar/AdminSideBar";
import Button from "@mui/material/Button";
import { Loader } from "../../../../Layout/Loader/Loader";
import { NavBar } from "../../../../Layout/Home/NavBar/NavBar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./ManageAllUsers.module.css";

export default class ManageAllUsers extends Component {
	defaultState = {
		users: [],
		isLoading: true,
	};

	constructor(props) {
		super(props);
		this.state = this.defaultState;
	}
	async componentDidMount() {
		this.setState({ isLoading: true });
		await AdminCrudService.UsersList().then(
			(response) => {
				console.log("res achieve");
				this.setState({ users: response.data });
			},
			(error) => {
				console.log("error");
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
	async onDelete(e, userId) {
		e.preventDefault();
		await AdminCrudService.DeleteUser(userId);
		alert("deleted");
		this.setState({
			users: this.state.users.filter((userItem) => userItem._id !== userId),
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
								<AdminSideBar />
							</Col>
							<Col md={10}>
								<Container>
									<Row>
										<h1 className="text-center mt-4">Manage All Users</h1>
									</Row>
									<Row>
										{console.log(this.state.users)}
										<TableContainer component={Paper}>
											{this.state.isLoading ? (
												<Loader message={"Your Content is Loading"} />
											) : (
												<Table sx={{ minWidth: 650 }} aria-label="simple table">
													<TableHead>
														<TableRow>
															<TableCell align="center">User Name</TableCell>
															<TableCell align="center">Email</TableCell>
															<TableCell align="center">Delete</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{this.state.users.length === 0 && (
															<div className=" d-flex justify-content-center  bg-white">
																<p>No such Users to verify</p>
															</div>
														)}
                                                        {this.state.users.map((user) => (
															<TableRow
																key={user._id}
																sx={{
																	"&:last-child td, &:last-child th": {
																		border: 0,
																	},
																}}
															>
																<TableCell align="center">
																	{user.name}
																</TableCell>
																<TableCell align="center">
																	{user.email}
																</TableCell>

																<TableCell align="center">
																	<Button
																		variant="contained"
																		color="error"
																		onClick={(e) => {
																			window.confirm(
																				"Are you sure you wish to delete this user?"
																			) && this.onDelete(e, user._id);
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
