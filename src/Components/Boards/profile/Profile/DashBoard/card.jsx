import { Card } from "react-bootstrap";
const Cards = (props) => {
	return (
		<Card style={{ width: "18rem" , marginTop:"20px" }}>
			<Card.Body style={{ display: "flex" ,background:"lightblue",color:"darkblue"}}>
				<Card.Title className="p-5"> Hello {props.name}</Card.Title>

			</Card.Body>
		</Card>
	);
};

export default Cards;
