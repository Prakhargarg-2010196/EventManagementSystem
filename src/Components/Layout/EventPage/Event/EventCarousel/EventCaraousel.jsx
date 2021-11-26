import { Carousel } from "react-bootstrap";
const EventCarousel = (props) => {
	return (
			<Carousel >
				{props.imgUrlArray.map((eventImage) => (
					<Carousel.Item >
						<img className="w-100" src={eventImage} alt="First slide" />
					</Carousel.Item>
				))}
			</Carousel>
	);
};
export default EventCarousel;
