import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { NavBar } from "../../../../../../Layout/Home/NavBar/NavBar";
import { SideBar } from "../../../SideBar/sidebar";
import UpdateFormEvent from "./UpdateFormEvent/UpdateFormEvent"
import styles from "./UpdateEvent.module.css";

export default class UpdateEvent extends Component {
	constructor(props) {
		super(props);
		this.state=this.props.history.location.state;
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
										<h1 className="text-center mt-4">Update Events</h1>
									</Row>
									<Row>
										<UpdateFormEvent />
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
