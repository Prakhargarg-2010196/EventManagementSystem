import {Container} from "react-bootstrap";

import {CardCarousel} from "./CardCarousel/CardCarousel";
import { Component } from "react";
import Footer from "./Footer/Footer.jsx";
import { NavBar } from "./NavBar/NavBar";
import React from "react";
import styles from "./Home.module.css";

class Home extends Component {
	render() {
		return (
			<>
			<NavBar />
				<div className={styles.container}>
					<Container>
					<CardCarousel />
					<CardCarousel />
					<CardCarousel />
					<CardCarousel />

					</Container>
									
				</div>
				<Footer />
			</>
		);
	}
}
export default Home;
