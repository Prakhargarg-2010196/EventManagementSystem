import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { NavBar } from "Components/Layout/Home/NavBar/NavBar";
import { SideBar } from "Components/Boards/profile/Profile/SideBar/sidebar";
import UpdateImagesEvent from "./UpdateImagesEvent/UpdateImagesEvent"
import styles from "./UpdateImage.module.css";

export default class UpdateEvent extends Component {
	constructor(props) {
		super(props);

		this.state=""
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
										<h1 className="text-center mt-4">Update Images</h1>
										<UpdateImagesEvent  />
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
