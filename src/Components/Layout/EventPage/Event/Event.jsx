import "react-toastify/dist/ReactToastify.css";

import * as React from "react";

import { ToastContainer, toast } from "react-toastify";

import { BaseUrl } from "../../../../api/services/BaseUrl";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EventCarousel from "../Event/EventCarousel/EventCaraousel";
import { Loader } from "../../Loader/Loader";
import Typography from "@mui/material/Typography";
import authService from "../../../../api/services/auth.service";
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
	let date = "";
	let time = "";
	let rate = "";
	let venueORlink = "";
	let city = "";
	let content = "";
	let mode = "";
	const [isLoading, setLoading] = React.useState(true);
	React.useEffect(() => {
		const getAllEventDetails = async () => {
			if (!authService.isAdmin()) {
				await crudService.Read(id).then(
					(response) => {
						if (response.data.post) {
							setCurrentEvent(response.data.post);
						}
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
						setLoading(false);
						toast.error(message, {
							position: "bottom-center",
							autoClose: 3000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							style: { background: "pink", color: "black" },
						});
					}
				);
			} else if (authService.isAdmin()) {
				await crudService.ReadAdminEvent(id).then(
					(response) => {
						if (response.data.post) {
							setCurrentEvent(response.data.post);
						}
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
						setLoading(false);
						toast.error(message, {
							position: "bottom-center",
							autoClose: 3000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							style: { background: "pink", color: "black" },
						});
					}
				);
			}
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
	if (event.date) {
		date = event.date;
	}
	if (event.time) {
		time = event.time;
	}
	if (event.content) {
		content = event.content;
	}
	if (event.rate) {
		rate = event.rate;
	}

	if (event.venueORlink) {
		venueORlink = event.venueORlink;
	}
	if (event.isOnline) {
		mode = event.isOnline;
	}
	if (event.city) {
		city = event.city;
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
				toast.error(message, {
					position: "bottom-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					style: { background: "pink", color: "black" },
				});
			}
		);
		if (!message) alert("Event has been registered");
	};
	return (
		<>
			{isLoading ? (
				<Loader message={"Event Coming Up..."} />
			) : (
				<>
					<h1 className="text-center mt-5">{event.title}</h1>
					<div className={styles.mainContainer}>
						<div className={styles.cardContainer}>
							<Card
								style={{
									width: "100%",
									height: "100%",
									padding: " 0 3em",
									boxShadow: " 0 8px 8px -4px lightblue",
									border: "solid rgb(191, 196, 191) 1px",
								}}
							>
								<EventCarousel imgUrlArray={imageUrlUpdate} />
								<CardContent
									style={{
										background: "#434C5E",
										display: "flex",
										alignItems: "end",
										flexDirection: "column",
									}}
								>
									<Typography
										sx={{ fontSize: 20, color: "#EBCB8B" }}
										color="text.secondary"
										gutterBottom
									>
										Date: {date.split("T")[0]}
									</Typography>
									<Typography
										sx={{ fontSize: 20, color: "#EBCB8B" }}
										color="text.secondary"
										gutterBottom
									>
										Time: {time}
									</Typography>
								</CardContent>

								{authService.isAuthenticated()?(<Button
									variant="contained"
									style={{
										background: "#BF616A",
										color: "black",
										border: "dashed 0.6px black",
										margin: "16px 0",
									}}
									onClick={(e) => handleClick(e)}
								>
									Register Now
								</Button>):""}
								<div className="d-flex justify-content-between flex-wrap mt-3 mb-3">
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
								<Typography
									sx={{ fontSize: 20, color: "#FD4005" }}
									color="text.secondary"
									gutterBottom
								>
									Price: &#8377; {rate}/-
								</Typography>
							</Card>
						</div>

						<div className={styles.contentBox}>
							<h1 style={{ color: "darkblue" }}>Event Details</h1>
							<br></br>
							<h2 style={{ fontStyle: "italic" }}>Content</h2>
							<p style={{ color: "#B86868" }}>{content}</p>
							<br></br>
							{mode ? (
								<h2 style={{ fontStyle: "italic" }}>Link </h2>
							) : (
								<h2 style={{ fontStyle: "italic" }}> Venue </h2>
							)}
							<p style={{ color: "#B86868" }}>{venueORlink}</p>
							{mode ? (
								""
							) : (
								<>
									<h2 style={{ fontStyle: "italic" }}>City </h2>
									<p style={{ color: "#B86868" }}>{city}</p>
								</>
							)}
						</div>

						{message && (
							<ToastContainer
								position="bottom-center"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						)}
					</div>
				</>
			)}
		</>
	);
};
export default Event;
