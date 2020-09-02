import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { getUsers } from './services/apiCall';

import Navbar from './components/navbar/Navbar';
import UsersPreview from './pages/usersPreview/UsersPreview';

interface Users {
	users: object[];
}

class App extends Component {
	state: Users = {
		users: []
	};

	/* 	async componentDidMount() {
		await getUsers().then((users) => {
			this.setState({ users: users.data });
		});

		console.log(this.state.users);
	} */

	searchForUser = async (value: string) => {
		console.log(value, 'value');
		await getUsers(value).then((users) => {
			this.setState({ users: users.data.items });
		});

		console.log(this.state.users);
	};

	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={() => <UsersPreview searchForUser={this.searchForUser} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
