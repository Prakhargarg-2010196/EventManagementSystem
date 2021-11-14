import  CardCarousel  from "./CardCarousel/CardCarousel";
import CarouselMain from "./CarouselMain/CarouselMain";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer/Footer.jsx";
import { NavBar } from "./NavBar/NavBar";
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
	// async componentDidMount() {
	// 	await PostService.ViewAllPosts().then((res) => {
	// 		const events = res.data;
	// 		this.setState(events);
	// 	});
	// }

	render() {
		return (
			<>
				<NavBar />
				<div className={styles.container}>
					<div className={styles.Search}>
						<SearchBar />
					</div>
					<Container>
						<CarouselMain />
						<CardCarousel/>
					
					</Container>
				</div>
				<Footer />
			</>
		);
	}
}
export default Home;
