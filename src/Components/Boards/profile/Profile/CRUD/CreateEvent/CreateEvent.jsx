import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import FormEvent from "./FormEvent/FormEvent";
import { NavBar } from "Components/Layout/Home/NavBar/NavBar";
import { SideBar } from "../../SideBar/sidebar";
import styles from "./CreateEvent.module.css";

export default class DashBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<>
				<div className={styles.container}>
					<NavBar />
					<Container fluid>
						<Row>
							<Col md={2}  className={styles.SideBar}>
								<SideBar />
							</Col>
							<Col md={10} >
								<FormEvent />
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}
