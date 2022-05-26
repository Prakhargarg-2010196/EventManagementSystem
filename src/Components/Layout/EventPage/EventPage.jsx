// import CarouselMain from "../Home/CarouselMain/CarouselMain";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Event from "./Event/Event";
import Footer from "../Home/Footer/Footer.jsx";
import { NavBar } from "../Home/NavBar/NavBar";
import { NavLink } from "react-router-dom";
import React from "react";
import SearchBar from "../Home/SearchBar/SearchBar";
import styles from "./EventPage.module.css";

class EventPage extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className={styles.container}>
				<div className={styles.Search}>
						<NavLink to="/">
							<h1 style={{ color: "#8360c3" }}>Eventooz</h1>
						</NavLink>
						<SearchBar />
					</div>

					<Container>
						<Event />
					</Container>
				</div>
				<Footer />
			</>
		);
	}
}
export default EventPage;
