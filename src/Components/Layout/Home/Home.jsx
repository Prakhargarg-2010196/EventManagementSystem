import CardCarousel from "./CardCarousel/CardCarousel";
import CarouselMain from "./CarouselMain/CarouselMain";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer/Footer.jsx";
import { NavBar } from "./NavBar/NavBar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./Home.module.css";
class Home extends Component {
	defaultState = {
		events: [],
	};
	constructor(props) {
		super(props);
		this.state = this.defaultState;
	}

	render() {
		return (
			<>
				<NavBar />
				<div className={styles.container}>
					<div className={styles.Search}>
						<NavLink to="/">
							<h1 style={{ color: "#8360c3" }}>Eventooze</h1>
						</NavLink>
						<SearchBar />
					</div>
					<Container>
						<CarouselMain />
						<CardCarousel />
					</Container>
				</div>
				<Footer />
			</>
		);
	}
}
export default Home;
