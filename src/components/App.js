import React from "react";
import Toggle from "./Toggle";
import LoginControl from "./LoginControl";

export default class App extends React.Component {
	state = {
		date: new Date()
	};

	componentDidMount() {
		this.timerID = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({
			date: new Date()
		});
	};

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				<Toggle />
				<LoginControl />
			</div>
		);
	}
}
