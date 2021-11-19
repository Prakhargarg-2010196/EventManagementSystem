import { Card } from "react-bootstrap";
const Cards = () => {
	return (
		<Card style={{ width: "18rem" , marginTop:"20px" }}>
			<Card.Body style={{ display: "flex" ,background:"#050A30",color:"#7EC8E3"}}>
				<Card.Title className="p-4"> Hello Admin</Card.Title>

			</Card.Body>
		</Card>
	);
};

export default Cards;
