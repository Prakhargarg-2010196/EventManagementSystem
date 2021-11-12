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

import EventCards from "./EventCards/EventCards";
import styles from "./CardCarousel.module.css";

SwiperCore.use([Pagination, Keyboard, Navigation, A11y, Scrollbar]);

export const CardCarousel = () => {
	return (
		<div className={styles.CardCarousel}>
			<Swiper
				loop={true}
				keyboard={{
					enabled: true,
				}}
				spaceBetween={40}
				slidesPerView={3}
				pagination					

				
				navigation={true}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper) => console.log(swiper)}
				breakpoints={{
					"375":{
						"slidesPerView": 2,
						"spaceBetween": 20
					},
					
					"640": {
					  "slidesPerView": 2,
					  "spaceBetween": 20
					},
					"768": {
					  "slidesPerView": 3,
					  "spaceBetween": 40
					},
					"1024": {
					  "slidesPerView": 4,
					  "spaceBetween": 50
					}
				  }}
			>
				<SwiperSlide>
					<EventCards />
				</SwiperSlide>
				<SwiperSlide>
					<EventCards />
				</SwiperSlide>
				<SwiperSlide>
					<EventCards />
				</SwiperSlide>
				<SwiperSlide>
					<EventCards />
				</SwiperSlide>
				<SwiperSlide>
					<EventCards />
				</SwiperSlide>
				<SwiperSlide>
					<EventCards />
				</SwiperSlide>
				<SwiperSlide>
					<EventCards />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
