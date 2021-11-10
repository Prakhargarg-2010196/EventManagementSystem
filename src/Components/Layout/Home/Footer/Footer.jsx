import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Facebook from '../../../../assets/facebook.png'
import { Image } from 'react-bootstrap';
import Instagram from '../../../../assets/instagram.png'
import Link from "@mui/material/Link";
// import React from "react";
import Twitter from '../../../../assets/twitter-sign.png'
// import SocialMedia from './SocialMedia';
import Typography from "@mui/material/Typography";
import styles from './Footer.module.css';

// export const Footer =()=>{
//     return(

//     )

// }



function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<CssBaseline />
			<Container
				component="main"
				sx={{ mt: 8, mb: 2 }}
				maxWidth="sm"
			></Container>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
					backgroundColor:" #765353",
						
				}}
			>
				<Container maxWidth="xl">
					<Typography variant="body1">
						
							<Image src={Twitter} className={styles.img}  />
							<Image src={Facebook} className={styles.img} />
							<Image src={Instagram} className={styles.img} />
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
}
