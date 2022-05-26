import "react-toastify/dist/ReactToastify.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import AdminCrudService from "api/services/admin-crud-service";
import { AdminSideBar } from "../AdminSidebar/AdminSideBar";
import Button from "@mui/material/Button";
import { Loader } from "Components/Layout/Loader/Loader";
import { NavBar } from "Components/Layout/Home/NavBar/NavBar";
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
		successful:false,
		message:"",
		
	};

	constructor(props) {
		super(props);
		this.state = this.defaultState;
	}
	async componentDidMount() {
		this.setState({ isLoading: true });
		await AdminCrudService.UsersList().then(
			(response) => {
				this.setState({ users: response.data });
			},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage=JSON.stringify(error.message).replace(/^"|"$/g, "");
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
	async onDelete(e, userId) {
		e.preventDefault();
		await AdminCrudService.DeleteUser(userId).then(
			(res) => {},
			(error) => {
				let resMessage = "";
				if (!error.response) {
					resMessage=JSON.stringify(error.message).replace(/^"|"$/g, "");
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
