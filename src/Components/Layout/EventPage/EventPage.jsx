import { Container, Row } from "react-bootstrap";

import CardCarousel from "../Home/CardCarousel/CardCarousel";
// import CarouselMain from "../Home/CarouselMain/CarouselMain";
import { Component } from "react";
import Event from "./Event/Event";
import Footer from "../Home/Footer/Footer.jsx";
import { NavBar } from "../Home/NavBar/NavBar";
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
						<SearchBar />
					</div>

					<Container>
						<Row>
							<Event />
						</Row>

						<Row>
							{/* <CardCarousel /> */}
						</Row>
					</Container>
				</div>
				<Footer />
			</>
		);
	}
}
export default EventPage;
