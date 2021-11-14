import * as React from "react";

import { maxWidth, textAlign } from "@mui/system";

import AppleIcon from "@mui/icons-material/Apple";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import ShopIcon from "@mui/icons-material/Shop";
import Typography from "@mui/material/Typography";
import styles from "./Footer.module.css";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link color="inherit" to="/" className={styles.links}>
				Eventooz
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
					backgroundColor: " #765353",
					display:"flex",
					flexWrap:"wrap"
				}}
			>
				<Box
					style={{ display: "flex", flexDirection: "column" }}
					sx={{
						width: 300,
						height: 300,
						borderRight:"solid 1px grey"
					}}
				>
					<div>
						<p style={{ fontSize: "20px" }}>Download our app</p>

							<ShopIcon sx={{ fontSize: 40 }} />
						
						<AppleIcon sx={{ fontSize: 40 }} />
					</div>
					<div>
						<p style={{ fontSize: "20px" }}>Follow us</p>
					
						<Link href="https://www.instagram.com/" className={styles.links}>	
						<InstagramIcon sx={{ fontSize: 40 }} />
						</Link>
						<Link href="https://www.instagram.com/" className={styles.links}>	
						<FacebookIcon sx={{ fontSize: 40 }} />
						</Link>
					</div>
				<Copyright />
				</Box>
				<Box
					style={{ display: "flex", flexDirection: "column" }}
					sx={{
						width: "72vw",
						height: 300,
					
					}}
				>
					<div>
						<h1 style={{ fontSize: "20px" }}>Learn </h1>
						<p>
							
						</p>
						
					</div>
					<div>
						<p style={{ fontSize: "20px" }}>Follow us</p>
					
						<Link href="https://www.instagram.com/" className={styles.links}>	
						<InstagramIcon sx={{ fontSize: 40 }} />
						</Link>
						<Link href="https://www.instagram.com/" className={styles.links}>	
						<FacebookIcon sx={{ fontSize: 40 }} />
						</Link>
					</div>
				<Copyright />
				</Box>
				
			</Box>
		</Box>
	);
}
