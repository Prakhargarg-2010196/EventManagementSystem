import 		CardCarousel  from "../Home/CardCarousel/CardCarousel";
// import CarouselMain from "../Home/CarouselMain/CarouselMain";
import { Component } from "react";
import { Container } from "react-bootstrap";
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
						<Event/>
						<div className="mt-5">
						<h2>Similar Events</h2>
						
						<CardCarousel />
							
						</div>
					</Container>
				</div>
				<Footer />
			</>
		);
	}
}
export default EventPage;
