import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	A11y,
	Keyboard,
	Navigation,
	Pagination,
	Scrollbar,
} from "swiper";
import { useEffect, useState } from "react";

import EventCards from "./EventCards/EventCards";
import PostService from "../../../../api/services/posts.service";
import styles from "./CardCarousel.module.css";

SwiperCore.use([Pagination, Keyboard, Navigation, A11y, Scrollbar]);
const CardCarousel = () => {
	const [events, setEvents] = useState([]);

	const getAllPosts = async () => {
		await PostService.ViewAllPosts().then((res) => {
			const events = res.data;
			setEvents(events);
		});
	};
	useEffect(() => {
		getAllPosts();
	}, []);

	const danceEvents = events.filter((event) => {
		if (event.category.indexOf("dance") >= 0) return event;
	});
	const singingEvents = events.filter((event) => {
		if (event.category.indexOf("singing") >= 0) return event;
	});
	
	const educationEvents = events.filter((event) => {
		if (event.category.indexOf("education") >= 0) return event;
	});
	const sportsEvents = events.filter((event) => {
		if (event.category.indexOf("sports") >= 0) return event;
	});
	const AwardEvents = events.filter((event) => {
		if (event.category.indexOf("award ceremony") >= 0) return event;
	});
	const workshopEvents = events.filter((event) => {
		if (event.category.indexOf("workshop") >= 0) return event;
	});
	const webinarsEvents = events.filter((event) => {
		if (event.category.indexOf("webinars") >= 0) return event;
	});
	
	console.log(danceEvents);
	return (
		<div className={styles.CardCarousel}>
			<Swiper
				spaceBetween={40}
				pagination
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				spaceBetween={40}
				pagination
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				spaceBetween={40}
				pagination
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				spaceBetween={40}
				pagination
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				spaceBetween={40}
				pagination
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				spaceBetween={40}
				pagination
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
							img={eventItem.imageUrl[0]}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				spaceBetween={40}
				pagination
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
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
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
export default CardCarousel;
