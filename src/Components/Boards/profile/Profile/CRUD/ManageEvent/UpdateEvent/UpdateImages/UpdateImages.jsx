import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import { NavBar } from "../../../../../../../Layout/Home/NavBar/NavBar";
import { SideBar } from "../../../../SideBar/sidebar";
import UpdateImagesEvent from "./UpdateImagesEvent/UpdateImagesEvent"
import crudService from "../../../../../../../../api/services/crud-service";
import styles from "./UpdateImage.module.css";

export default class UpdateEvent extends Component {
	constructor(props) {
		super(props);
		this.state={id : this.props.match.params};
		console.log(this.state.id.id)
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
									</Row>
									<Row>
										<UpdateImagesEvent id={this.state.id.id} />
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
