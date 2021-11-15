import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import Cards from "./card.jsx";
import { NavBar } from "../../../Layout/Home/NavBar/NavBar";
import { SideBar } from "../Profile/SideBar/sidebar";
import styles from "./AdminDashBoard.module.css";
import userService from "../../../../api/services/user.service.js";

export default class AdminDashBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			result:{}
		};
	}
	componentDidMount(){
		userService.getUserBoard().then((res)=>{
			const result=res.data;
			this.setState({result});
		})
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
										<Cards name={this.state.result.name}/>
									</Row>
									<Row>
										
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
