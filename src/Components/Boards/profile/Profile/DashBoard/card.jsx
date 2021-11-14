import { Card } from "react-bootstrap";
import user from "../../../../../assets/user.jpg";
const Cards = (props) => {
	return (
		<Card style={{ width: "18rem" , marginTop:"20px" }}>
			<Card.Body style={{ display: "flex" }}>
				<Card.Title className="p-4"> Hello {props.name}</Card.Title>

				<Card.Img variant="top" src={user} />
			</Card.Body>
		</Card>
	);
};

export default Cards;
