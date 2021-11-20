import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
import authService from "../../../../../api/services/auth.service";
import styles from "./AdminSideBar.module.css";

const style = {
	width: "100%",
	bgcolor: "transparent",
};
export const AdminSideBar = () => {
	// const history = React.useHistory();
	return (
		<>
			<nav className={styles.nav}>
				<List sx={style} component="nav">
					<NavLink className={styles.link} to="/AdminDashBoard">
						<ListItem className={styles.listItem} button divider>
							{" "}
							DashBoard
						</ListItem>
					</NavLink>
					<Divider />
					<Divider />
					<NavLink className={styles.link} to="/ManageUsers">
						<ListItem button className={styles.listItem} divider>
							Manage Users
						</ListItem>
					</NavLink>
				</List>
				<Button
					variant="contained"
					sx={{ marginTop: "20%" }}
					onClick={() => {
						authService.logOut();
						// history.push("/");
					}}
					startIcon={<LogoutIcon />}
				>
					Logout
				</Button>
			</nav>
		</>
	);
};
