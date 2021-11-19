import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import authService from "../../../../../api/services/auth.service";
import styles from "./SideBar.module.css";

const style = {
	width: "100%",
	bgcolor: "transparent",
};
export const SideBar = () => {
	const history = useHistory();
	return (
		<>
			<nav className={styles.nav}>
				<List sx={style} component="nav" >
					<NavLink className={styles.link} to="/DashBoard">
						<ListItem className={styles.listItem} button divider> DashBoard</ListItem>
					</NavLink>
					<Divider />
					<Divider />
					<NavLink className={styles.link} to="/CreateEvent">
						<ListItem button className={styles.listItem} divider>Create event</ListItem>
					</NavLink>
					<Divider />
					<Divider />
					<NavLink className={styles.link} to="/ManageEvent">
						<ListItem button  className={styles.listItem} divider>
							Manage Event
						</ListItem>
					</NavLink>
					<Divider />
					<Divider />
					<NavLink className={styles.link} to="/RegisteredEvents">
						<ListItem button className={styles.listItem} divider>Registered Events</ListItem>
					</NavLink>
					<NavLink className={styles.link} to="/BookMarkedEvents">
						<ListItem button className={styles.listItem} divider>Bookmarked Events</ListItem>
					</NavLink>
					<Divider />
					<Divider />
				</List>
				<Button
					variant="contained"
					sx={{marginTop:"20%"}}
					onClick={() => {
						authService.logOut();
						history.push("/");
					}}
					startIcon={<LogoutIcon />}
				>
					Logout
				</Button>
			</nav>
		</>
	);
};
