import React, { Component } from "react";

// import AuthService from "../services/auth.service";

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <div className="container">

    
      
    </div>;
	}
}
// const { currentUser } = this.state;

// currentUser: AuthService.getCurrentUser()

/* <header className="jumbotron">
  <h3>
    <strong>{currentUser.username}</strong> Profile
  </h3>
</header>
<p>
  <strong>Token:</strong>{" "}
  {currentUser.token.substring(0, 20)} ...{" "}
  {currentUser.token.substr(currentUser.token.length - 20)}
</p>

<p>
  <strong>Email:</strong>{" "}
  {currentUser.email}
</p>
<strong>Authorities:</strong>
<ul>
  {currentUser.roles &&
    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
</ul> */
