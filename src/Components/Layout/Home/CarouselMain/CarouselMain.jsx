import { Carousel } from "react-bootstrap";
import bgimageOne from "../../../../assets/carouselbg.png"
import bgimageThree from "../../../../assets/2.png"
import bgimageTwo from "../../../../assets/1.png"
import styles from "./Caraousel.module.css";
const CarouselMain = () => {
	return (
		<div className={styles.CardCarousel}>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={bgimageOne}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={bgimageOne}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={bgimageOne}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
export default CarouselMain;