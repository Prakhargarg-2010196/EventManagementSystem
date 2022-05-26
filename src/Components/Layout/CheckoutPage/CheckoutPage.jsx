import Checkout from "./Checkout/Checkout.jsx";
import { CheckoutCard } from "./CheckoutCard/CheckoutCard.jsx";
// import CarouselMain from "../Home/CarouselMain/CarouselMain";
import { Component } from "react";
import Footer from "../Home/Footer/Footer.jsx";
import { NavBar } from "../Home/NavBar/NavBar";
import React from "react";
import SearchBar from "../Home/SearchBar/SearchBar";
import styles from "./CheckoutPage.module.css";

class CheckoutPage extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className={styles.container}>
					<div className={styles.Search}>
						<SearchBar />
					</div>

					
						<div className="d-flex justify-content-around">
							<CheckoutCard />

							<Checkout />
						</div>
				</div>
				<Footer />
			</>
		);
	}
}
export default CheckoutPage;
