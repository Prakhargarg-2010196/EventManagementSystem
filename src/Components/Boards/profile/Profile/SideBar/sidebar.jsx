import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import authService from "api/services/auth.service";
import styles from "./SideBar.module.css";

export const SideBar = () => {
	const history = useHistory();
	return (
		<>
			<List component="nav">
				<NavLink
					exact
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/DashBoard"
				>
					<ListItem divider>DashBoard</ListItem>
				</NavLink>

				<Divider />
				<Divider />
				<NavLink
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/CreateEvent"
				>
					<ListItem divider>Create event</ListItem>
				</NavLink>
				<Divider />
				<Divider />
				<NavLink
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/ManageEvent"
				>
					<ListItem divider>Manage Event</ListItem>
				</NavLink>
				<Divider />
				<Divider />
				<NavLink
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/RegisteredEvents"
				>
					<ListItem divider>Registered Events</ListItem>
				</NavLink>
				<NavLink
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/BookMarkedEvents"
				>
					<ListItem divider>Bookmarked Events</ListItem>
				</NavLink>
				<Divider />
				<Divider />
			</List>
			<Button
				variant="contained"
				sx={{}}
				onClick={() => {
					authService.logOut();
					history.push("/");
				}}
				startIcon={<LogoutIcon />}
			>
				Logout
			</Button>
		</>
	);
};
