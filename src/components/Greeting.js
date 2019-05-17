import React from "react";

export default function Greeting(props) {
	const UserGreeting = props => {
		return <h1>Welcome back!</h1>;
	};

	const GuestGreeting = props => {
		return <h1>Hello, Stranger!</h1>;
	};

	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
}
