import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@mui/material";

import bgimageOne from "../../../../assets/carouselbg.png";

export const CheckoutCard = () => {
	return (
		<Card style={{ width: "100%",marginTop: "50px" }}>
			<CardHeader title="event Name" /> 
				
			<CardMedia component="img" image={bgimageOne} alt="" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Lizard
				</Typography>
			</CardContent>
		</Card>
	);
};
