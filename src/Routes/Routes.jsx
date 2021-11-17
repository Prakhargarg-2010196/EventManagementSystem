import { Route, Switch } from "react-router-dom";

import AdminDashBoard from "../Components/Boards/profile/Admin/AdminDashBoard";
import BookMarkedEvents from "../Components/Boards/profile/Profile/BookMarkedEvents/BookMarkedEvents";
import CardCarousel from "../Components/Layout/Home/CardCarousel/CardCarousel";
import ChangePass from "../Components/Auth/ChangePass/ChangePass";
import CheckoutPage from "../Components/Layout/CheckoutPage/CheckoutPage";
import CreateEvent from "../Components/Boards/profile/Profile/CRUD/CreateEvent/CreateEvent";
import DashBoard from "../Components/Boards/profile/Profile/DashBoard/DashBoard";
import EventPage from "../Components/Layout/EventPage/EventPage";
import Home from "../Components/Layout/Home/Home";
import { Loader } from "../Components/Layout/Loader/Loader";
import LoginPage from "../Components/Auth/LoginPage/LoginPage";
import ManageEvent from "../Components/Boards/profile/Profile/CRUD/ManageEvent/Manage Events";
import OtpPasswordReset from "../Components/Auth/PasswordReset/OtpPasswordReset/OtpPasswordReset";
import OtpSignUp from "../Components/Auth/SignUpPage/OtpSignUp/OtpSignup.jsx";
import PasswordResetPage from "../Components/Auth/PasswordReset/PasswordReset";
import ProtectedRoute from "../Routes/protectedRoutes";
import SignUpPage from "../Components/Auth/SignUpPage/SignUpPage";
import UpdateEvent from "../Components/Boards/profile/Profile/CRUD/ManageEvent/UpdateEvent/UpdateEvent";
import UpdateFormEvent from "../Components/Boards/profile/Profile/CRUD/ManageEvent/UpdateEvent/UpdateFormEvent/UpdateFormEvent";
import UpdateImages from "../Components/Boards/profile/Profile/CRUD/ManageEvent/UpdateEvent/UpdateImages/UpdateImages";
import UpdateImagesEvent from "../Components/Boards/profile/Profile/CRUD/ManageEvent/UpdateEvent/UpdateImages/UpdateImagesEvent/UpdateImagesEvent";

export const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home}></Route>
			<ProtectedRoute
				path="/PasswordResetPage"
				exact
				component={PasswordResetPage}
			/>
			<Route path="/LogInPage" exact component={LoginPage}></Route>
			<ProtectedRoute path="/SignUpPage" exact component={SignUpPage} />
			<ProtectedRoute path="/ChangePass" exact component={ChangePass} />
			<ProtectedRoute path="/OtpSignUp" exact component={OtpSignUp} />
			<ProtectedRoute
				path="/OtpPasswordReset"
				exact
				component={OtpPasswordReset}
			/>
			<ProtectedRoute
				path="/CreateEvent"
				exact
				component={CreateEvent}
			></ProtectedRoute>

			<ProtectedRoute
				path="/ManageEvent"
				exact
				component={ManageEvent}
			></ProtectedRoute>
			<ProtectedRoute
				path="/UpdateEvent/:id"
				exact
				component={UpdateEvent}
			></ProtectedRoute>
			<ProtectedRoute
				path="/UpdateFormEvent"
				exact
				component={UpdateFormEvent}
			></ProtectedRoute>
			<ProtectedRoute
				path="/UpdateImagesEvent"
				exact
				component={UpdateImagesEvent}
			></ProtectedRoute>
			<ProtectedRoute
				path="/UpdateImages/:id"
				exact
				component={UpdateImages}
			></ProtectedRoute>
			<ProtectedRoute
				path="/EventPage"
				exact
				component={EventPage}
			></ProtectedRoute>
			<Route path="/CheckoutPage" exact component={CheckoutPage}></Route>
			<Route path="/CardCarousel" exact component={CardCarousel}></Route>
			<Route
				path="/BookMarkedEvents/:id"
				exact
				component={BookMarkedEvents}
			></Route>
			<ProtectedRoute
				path="/AdminDashBoard"
				exact
				component={AdminDashBoard}
			></ProtectedRoute>
			<Route path="/Loader" exact component={Loader}></Route>

			<ProtectedRoute path="/DashBoard" component={DashBoard} />
		</Switch>
	);
};
