import React, { Component } from "react";
import Greeting from "./Greeting";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class LoginControl extends Component {
	state = {
		isLoggedIn: false
	};

	handleLoginClick = () => {
		this.setState({ isLoggedIn: true });
	};

	handleLogoutClick = () => {
		this.setState({ isLoggedIn: false });
	};

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}
