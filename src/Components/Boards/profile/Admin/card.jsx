import { Card } from "react-bootstrap";
const Cards = () => {
	return (
		<Card
			style={{
				width: "100%",
				margin: "20px 0",
				background: "lightblue",
				border: "grey 2px dotted",
			}}
		>
			<Card.Body
				style={{
					display: "flex",

					color: "darkblue",
					fontSize: "1em",
					flexDirection:"column",
					justifyContent: "center",
					alignContent: "center",
				}}
			>
				<h1>Hello Admin</h1>
				<br></br>
				<p>Your email id is eventooze@gmail.com</p>
			</Card.Body>
		</Card>
	);
};

export default Cards;
