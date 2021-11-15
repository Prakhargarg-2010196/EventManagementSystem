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
		<Card style={{ width: "200%",marginTop: "50px" }}>
			<CardHeader title="Event Name" subheader="Rs.2300.7"/> 
				
			<CardMedia component="img"  sx={{width:"100%"}} image={bgimageOne} alt="" />
			
		</Card>
	);
};
