import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from '@mui/icons-material/Logout';
import React from "react";
import styles from "./SideBar.module.css";
const style = {
	width: "100%",
	bgcolor: "transparent",

};
export const SideBar = () => {
	return (
		<>
			<nav className={styles.nav}>
				<List sx={style} component="nav" aria-label="mailbox folders">
					<ListItem button>
						<Link className={styles.link} to="DashBoard">
							DashBoard 
						</Link>
					</ListItem>
					<Divider />
					<Divider />
					<ListItem button divider>
						<Link className={styles.link} to="ManageEvent">
							Manage Event
						</Link>
					</ListItem>
					<Divider />
					<Divider />
					<ListItem button>
						<Link className={styles.link} to="CreateEvent">
							Create event 
						</Link>
					</ListItem>
					<Divider />
					<Divider />
					<ListItem button>
						<Link className={styles.link} to="/">
							Bookmarked Events
						</Link>
					</ListItem>
					
				</List>
				<Button variant="contained"  sx={{position:"fixed",bottom:"30px",left:"50px"}} startIcon={<LogoutIcon/>}>Logout</Button>
			</nav>
		</>
	);
};
