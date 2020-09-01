import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { getUsers } from './services/apiCall';

import Navbar from './components/navbar/Navbar';

interface Users {
	users: object[];
}

class App extends Component {
	state: Users = {
		users: []
	};

	async componentDidMount() {
		await getUsers().then((users) => {
			this.setState({ users: users.data });
		});
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route />
				</Switch>
			</div>
		);
	}
}

export default App;
