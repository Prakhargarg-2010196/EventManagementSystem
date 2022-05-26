import { Carousel } from "react-bootstrap";
import bgimageOne from "assets/carouselbg.png";
import styles from "./Caraousel.module.css";
const CarouselMain = () => {
	return (
		<div className={styles.CardCarousel}>
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={bgimageOne} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={bgimageOne} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={bgimageOne} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
export default CarouselMain;
