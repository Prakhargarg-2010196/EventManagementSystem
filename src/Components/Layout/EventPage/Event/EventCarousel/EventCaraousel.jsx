import { Carousel } from "react-bootstrap";
import styles from "./EventCarousel.module.css";
const EventCarousel = (props) => {
	return (
		<div className={styles.CardCarousel}>
			<Carousel>
				{props.imgUrlArray.map((eventImage) => (
					<Carousel.Item >
						<img className="w-100" src={eventImage} alt="First slide" />
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};
export default EventCarousel;
