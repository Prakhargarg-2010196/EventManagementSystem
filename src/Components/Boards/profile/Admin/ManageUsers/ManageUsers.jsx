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
import styles from "./ManageUsers.module.css";

export default class ManageUsers extends Component {
	defaultState = {
		verifyList: [],
		isLoading: true,
	};

	constructor(props) {
		super(props);
		this.state = this.defaultState;
	}
	async componentDidMount() {
		this.setState({ isLoading: true });
		console.log("first");
		await AdminCrudService.VerifyList().then(
			(response) => {
				console.log("res achieve")
				this.setState({ verifyList: response.data });
			},
			(error) => {
				console.log("error")
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
	async onVerify(e, verifyItemId) {
		e.preventDefault();
		await AdminCrudService.Verify(verifyItemId);
		alert("verified");
		this.setState({verifyList:this.state.verifyList.filter((verifyItem) => verifyItem._id !== verifyItemId)})
	}
	async onReject(e, verifyItemId) {
		e.preventDefault();
		await AdminCrudService.Reject(verifyItemId);

		alert(" user not verified as creator");
		this.setState({verifyList:this.state.verifyList.filter((verifyItem) => verifyItem._id !== verifyItemId)})

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
										<h1 className="text-center mt-4">Manage Events</h1>
									</Row>
									<Row>
										{console.log(this.state.verifyList)}
										<TableContainer component={Paper}>
											{this.state.isLoading ? (
												<Loader message={"Your Content is Loading"} />
											) : (
												<Table sx={{ minWidth: 650 }} aria-label="simple table">
													<TableHead>
														<TableRow>
															<TableCell align="center">User Name</TableCell>
															<TableCell align="center">Email</TableCell>
															<TableCell align="center">Verify</TableCell>
															<TableCell align="center">Reject</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{this.state.verifyList.map((verifyItem) => (
															<TableRow
																key={verifyItem._id}
																sx={{
																	"&:last-child td, &:last-child th": {
																		border: 0,
																	},
																}}
															>
																<TableCell align="center">
																	{verifyItem.name}
																</TableCell>
																<TableCell align="center">
																	{verifyItem.email}
																</TableCell>
																<TableCell align="center">
																	<Button
																		variant="contained"
																		color="success"
																		onClick={(e) => {
																			this.onVerify(e, verifyItem._id);
																		}}
																	>
																		Verify
																	</Button>
																</TableCell>

																<TableCell align="center">
																	<Button
																		variant="contained"
																		color="error"
																		onClick={(e) => {
																			this.onReject(e, verifyItem._id);
																		}}
																	>
																		Reject
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
