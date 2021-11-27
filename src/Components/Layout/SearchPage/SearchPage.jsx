import { Col, Container, Row } from "react-bootstrap";

import { Component } from "react";
import Footer from "../Home/Footer/Footer";
import { Link } from "react-router-dom";
import { NavBar } from "../Home/NavBar/NavBar";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import SearchBar from "../Home/SearchBar/SearchBar";
import styles from "../Home/Home.module.css";
import styles2 from "./SearchPage.module.css";

class SearchPage extends Component {
	defaultState = {
		events: this.props.history.location.state.events,
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
						<Row className="flex-wrap">
							{this.state.events.map((event) => (
							<Col>
								<div className={styles2.card}>
									<div className={styles2.cardTitle}>{event.title}</div>
									<div><img alt="" src={event.imageUrl[0]}/></div>
									<div className={styles2.cardBody}>
										<Link to>
										{event.content}
										
										</Link>
									</div>
								</div>
							</Col>

							 ))} 
						</Row>
					</Container>
				</div>
				<Footer />
			</>
		);
	}
}
export default SearchPage;
