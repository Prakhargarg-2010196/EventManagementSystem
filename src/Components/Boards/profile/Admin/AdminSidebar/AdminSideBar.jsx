import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import authService from "api/services/auth.service";
import styles from "./AdminSideBar.module.css";

export const AdminSideBar = () => {
	const history = useHistory();
	return (
		<>
			<List component="nav">
				<NavLink
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/AdminDashBoard"
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
					to="/ManageUsers"
				>
					<ListItem divider> Verify Users</ListItem>
				</NavLink>
				<Divider />
				<Divider />
				<NavLink
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/ManageAllEvents"
				>
					<ListItem divider>All Events</ListItem>
				</NavLink>
				<Divider />
				<Divider />
				<NavLink
					activeStyle={{
						color: "blue",
					}}
					className={styles.link}
					to="/ManageAllUsers"
				>
					<ListItem divider>All Users</ListItem>
				</NavLink>
			</List>
			<Button
				variant="contained"
				sx={{ marginTop: "20%" }}
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
