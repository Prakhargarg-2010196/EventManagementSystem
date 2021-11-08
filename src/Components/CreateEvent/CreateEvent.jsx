import React, { Component } from "react";

import { Container } from "react-bootstrap";
import { Footer } from "../Layout/Home/Footer/Footer.jsx";
import { FormEvent } from "./FormEvent/FormEvent";
import { NavBar } from "../Layout/Home/NavBar/NavBar.jsx";
import styles from "./CreateEvent.module.css";

class CreateEvent extends Component {
	defaultState = {
		title: "",
		content: "",
		category: "",
		venueOrlink: "",
		isOnline: "",
		time: "",
		date: "",
		rate: "",
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleImageChange = (e) => {
		this.setState({
			image: e.target.files[0],
		});
	};
	

	render() {
		return (
			<Container fluid style={{background:"aliceblue"}} className={styles.containerFluid}>
				<NavBar />

				<h1 className="text-center mt-4">Create a event</h1>
				<Container className={styles.container} >
					<FormEvent />
				</Container>
			<Footer/>	
			</Container>
		);
			
		
	}
}
export default CreateEvent;
