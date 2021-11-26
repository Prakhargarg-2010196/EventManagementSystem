import * as React from "react";

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
		<Typography variant="body2" color="text.secondary" className="text-center">
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
					py: 2,
					px: 3,
					mt: "auto",
					backgroundColor: " #765353",
					display: "flex",
				}}
				className={styles.footer}
			>
				<Box
					style={{ display: "flex", flexDirection: "column" }}
					sx={{
						width: 400,
						height: 300,
					}}
				>
					<div className="text-center">
						<p style={{ fontSize: "20px" }}>Download our app</p>

						<ShopIcon sx={{ fontSize: 40, color: "white" }} />

						<AppleIcon sx={{ fontSize: 40, color: "white" }} />
					</div>
					<div className="text-center">
						<p style={{ fontSize: "20px" }}>Follow us</p>

						<Link href="https://www.instagram.com/" className={styles.links}>
							<InstagramIcon sx={{ fontSize: 40, color: "white" }} />
						</Link>
						<Link href="https://www.instagram.com/" className={styles.links}>
							<FacebookIcon sx={{ fontSize: 40, color: "white" }} />
						</Link>
					</div>

					<Copyright />
				</Box>
				<Box
					style={{ display: "flex", flexDirection: "column" }}
					sx={{
						width: 400,
						height: 300,
					}}
				>
					<div className="d-flex flex-column m-auto mt-0">
						<p style={{ fontSize: "20px" }}>Learn More</p>
						<a href="google.com" alt="">
							How it works
						</a>
						<a href="google.com" alt="">
							Policies
						</a>
						<a href="google.com" alt="">
							Privacy
						</a>

						<a href="google.com" alt="">
							Support / FAQs
						</a>
					</div>
				</Box>
				<Box
					style={{ display: "flex", flexDirection: "column" }}
					sx={{
						width: 400,
						height: 300,
					}}
				>
					<div className="d-flex flex-column m-auto mt-0">
						<p style={{ fontSize: "20px" }}>About</p>
						<a href="google.com" alt="">
							About us
						</a>
						<a href="google.com" alt="">
							Contact us
						</a>
						<a href="google.com" alt="">
							Blog
						</a>
						<a href="google.com" alt="">
							Event Magazine
						</a>
						<a href="google.com" alt="">
							Product Diary
						</a>
						<a href="google.com" alt="">
							Sitemap
						</a>
					</div>
				</Box>
				<Box
					style={{ display: "flex", flexDirection: "column" }}
					sx={{
						width: 400,
						height: 300,
					}}
				>
					<div className="d-flex flex-column m-auto mt-0 ">
						<p style={{ fontSize: "20px" }}>Organize events</p>
						<a href="google.com" alt="">
							Music
						</a>
						<a href="google.com" alt="">
							sports
						</a>
						<a href="google.com" alt="">
							Award ceremony
						</a>
						<a href="google.com" alt="">
							trade &shopping
						</a>
						<a href="google.com" alt="">
							education
						</a>
						<a href="google.com" alt="">
							workshop
						</a>
						<a href="google.com" alt="">
							webinar
						</a>
						<a href="google.com" alt="">
							festival & parties
						</a>
						<a href="google.com" alt="">
							art &craft
						</a>
						<a href="google.com" alt="">
							Product launch
						</a>
						
					</div>
				</Box>
				
			</Box>
		</Box>
	);
}
