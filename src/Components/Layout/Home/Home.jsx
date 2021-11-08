import CardCarousel from "./CardCarousel/CardCarousel";
// import Checkout from "./Checkout/Checkout";
import { Component } from "react";
import {Container} from "react-bootstrap";
import { Footer } from "./Footer/Footer.jsx";
import { NavBar } from "./NavBar/NavBar";
import React from "react";
import styles from "./Home.module.css";

class Home extends Component {
	render() {
		return (
			<Container fluid className={styles.containerFluid}>
				<NavBar/>
				<Container className={styles.container}>
					{/* <CardCarousel />
					<CardCarousel />
					<CardCarousel />
					<CardCarousel />
					<CardCarousel />
					<CardCarousel />
					<CardCarousel /> */}
				</Container>
				<Footer />
			</Container>);
	}
}
export default Home;
