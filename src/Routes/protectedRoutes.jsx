import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

import React from "react";
import authService from "api/services/auth.service";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (authService.isAuthenticated()||authService.isAdmin()) {
					return <Component {...props} />;
				}
				if (!authService.isAuthenticated()||!authService.isAdmin()) {
					return (
						<Redirect
							to={{
								pathname: "/LogInPage",
								state: { from: props.location },
							}}
						/>
					);
				}
			}}
		/>
	);
}
export default ProtectedRoute;
