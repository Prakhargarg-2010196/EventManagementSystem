import * as React from "react";

import { Col, Row } from "react-bootstrap";

import { BaseUrl } from "../../../../api/services/BaseUrl";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import EventCarousel from "../Event/EventCarousel/EventCaraousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { Loader } from "../../Loader/Loader";
import crudService from "../../../../api/services/crud-service";
import postsService from "../../../../api/services/posts.service";
import styles from "./Event.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Event = () => {
	const { id } = useParams();
	const [event, setCurrentEvent] = React.useState({});
	let imgPath = [];
	let imageUrlUpdate = [];
	let category = [];
	const [message, setMessage] = React.useState("");
	const [successful, setSuccess] = React.useState(false);

	const [isLoading, setLoading] = React.useState(true);
	React.useEffect(() => {
		const getAllEventDetails = async () => {
			await crudService.Read(id).then(
				(response) => {
					if (response.data.post) setCurrentEvent(response.data.post);
					setSuccess(true);
					setLoading(false);
				},
				(error) => {
					let message = "";
					if (!error.response || !BaseUrl()) {
						message = JSON.stringify(error.message).replace(/^"|"$/g, "");
					} else message = error.response.data;
					setSuccess(false);
					setMessage(message);
				}
			);
		};
		getAllEventDetails();
	}, []);
	if (event.imageUrl) {
		imgPath = event.imageUrl;
		imageUrlUpdate = imgPath.map((img) => `${BaseUrl()}${img}`);
	}
	if (event.category) {
		category = event.category;
	}
	const handleClick = async () => {
		await postsService.RegisterPost(id).then(
			(response) => {},
			(error) => {
				let message = "";
				if (!error.response || !BaseUrl()) {
					message = JSON.stringify(error.message).replace(/^"|"$/g, "");
				} else message = error.response.data;
				setSuccess(false);
				setMessage(message);
			}
		);
		alert("Event has been registered");
	};
	return (
		<>
			<Row>
				{isLoading ? (
					<Loader message={"Event Coming Up..."} />
				) : (
					<>
						<h1 className="text-center mt-4">{event.title}</h1>

						<Col md={6}>
							<Card
								style={{
									marginTop: "100px",
									width: "100%",
									height: "100%",
									padding: " 0 3em",
									boxShadow: " 0 8px 8px -4px lightblue",
									border: "solid rgb(191, 196, 191) 1px",
								}}
							>
								<EventCarousel imgUrlArray={imageUrlUpdate} />

								<CardActions>
									<IconButton aria-label="add to favorites">
										<FavoriteIcon />
									</IconButton>
									<Button variant="contained" onClick={(e) => handleClick(e)}>
										Register Now
									</Button>
								</CardActions>
								<div className="d-flex justify-content-between mb-3">
									<h4>Categories</h4>
									{category.map((categoryItem) => (
										<Button
											variant="contained"
											style={{ background: "#BF616A" }}
										>
											#{categoryItem}
										</Button>
									))}
								</div>
							</Card>
						</Col>
						<Col md={6}>
							<div className={styles.contentBox}>
								<h1>Event Details</h1>
								{event.content}
							</div>
						</Col>
						{message && (
							<div className="form-group mt-4">
								<div className="alert alert-danger" role="alert">
									{message}
								</div>
							</div>
						)}
					</>
				)}
			</Row>
		</>
	);
};
export default Event;
