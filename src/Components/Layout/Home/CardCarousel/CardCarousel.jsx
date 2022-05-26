import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	A11y,
	Keyboard,
	Navigation,
	Pagination,
	Scrollbar,
} from "swiper";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import EventCards from "./EventCards/EventCards";
import PostService from "api/services/posts.service";
import styles from "./CardCarousel.module.css";

SwiperCore.use([Pagination, Keyboard, Navigation, A11y, Scrollbar]);
const CardCarousel = (props) => {
	const [events, setEvents] = useState([]);
	const [message, setMessage] = useState("");
	let danceEvents = [];
	let musicEvents = [];
	let educationEvents = [];
	let sportsEvents = [];
	let AwardEvents = [];
	let workshopEvents = [];
	let webinarsEvents = [];
	let singingEvents = [];
	useEffect(() => {
		const getAllPosts = async () => {
			await PostService.ViewAllPosts().then(
				(res) => {
					const events = res.data;
					setEvents(events);
				},
				(error) => {
					let message = "";
					if (!error.response) {
						message = JSON.stringify(error.message).replace(/^"|"$/g, "");
					} else message = error.response.data;
					setMessage(message);
					toast.error(message, {
						position: "bottom-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						style: { background: "pink", color: "black" },
					});
				}
			);
		};
		getAllPosts();
	}, []);
	if (events) {
		danceEvents = events.filter(
			(event) => event.category.indexOf("dance") >= 0
		);
		musicEvents = events.filter(
			(event) => event.category.indexOf("music") >= 0
		);

		educationEvents = events.filter(
			(event) => event.category.indexOf("education") >= 0
		);
		sportsEvents = events.filter(
			(event) => event.category.indexOf("sports") >= 0
		);
		AwardEvents = events.filter(
			(event) => event.category.indexOf("award ceremony") >= 0
		);
		workshopEvents = events.filter(
			(event) => event.category.indexOf("workshops") >= 0
		);
		webinarsEvents = events.filter(
			(event) => event.category.indexOf("webinars") >= 0
		);
		singingEvents = events.filter(
			(event) => event.category.indexOf("singing") >= 0
		);
	}

	return (
		<div className={styles.CardCarousel}>
			<div>
				{danceEvents.length !== 0 ? <h1>danceEvents </h1> : ""}

				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{danceEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								img={eventItem.imageUrl[0]}
								content={eventItem.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				{musicEvents.length !== 0 ? <h1>musicEvents </h1> : ""}
				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{musicEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								img={eventItem.imageUrl[0]}
								content={eventItem.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				{educationEvents.length !== 0 ? <h1>educationEvents </h1> : ""}
				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{educationEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								img={eventItem.imageUrl[0]}
								content={eventItem.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				{sportsEvents.length !== 0 ? <h1>sportsEvents </h1> : ""}
				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{sportsEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								img={eventItem.imageUrl[0]}
								content={eventItem.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				{AwardEvents.length !== 0 ? <h1>AwardEvents </h1> : ""}
				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{AwardEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								img={eventItem.imageUrl[0]}
								content={eventItem.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				{workshopEvents.length !== 0 ? <h1>workshopEvents </h1> : ""}
				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{workshopEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								content={eventItem.content}
								img={eventItem.imageUrl[0]}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				{webinarsEvents.length !== 0 ? <h1>webinarsEvents </h1> : ""}
				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{webinarsEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								img={eventItem.imageUrl[0]}
								content={eventItem.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div>
				{singingEvents.length !== 0 ? <h1>singingEvents </h1> : ""}
				<Swiper
					spaceBetween={40}
					pagination
					navigation={true}
					breakpoints={{
						375: {
							slidesPerView: 2,
							spaceBetween: 20,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
				>
					{singingEvents.map((eventItem) => (
						<SwiperSlide key={eventItem._id}>
							<EventCards
								title={eventItem.title}
								id={eventItem._id}
								img={eventItem.imageUrl[0]}
								content={eventItem.content}
							/>
						</SwiperSlide>
					))}
				</Swiper>
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
	);
};
export default CardCarousel;
