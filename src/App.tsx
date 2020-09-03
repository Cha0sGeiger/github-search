import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { getUsers, getSingleUser } from './services/apiCall';

import Navbar from './components/navbar/Navbar';
import UsersPreview from './pages/usersPreview/UsersPreview';
import UserProfile from './components/user-profile/UserProfile';

interface Users {
	users: Array<any>;
	user: object;
}

class App extends Component {
	state: Users = {
		users: [],
		user: {}
	};
	/* 	async componentDidMount() {
		await getUsers().then((users) => {
			this.setState({ users: users.data });
		});

		console.log(this.state.users);
	} */

	searchForUsers = async (value: string) => {
		await getUsers(value).then((users) => {
			this.setState({ users: users.data.items });
		});
	};

	getSingleUser = async (username: string) => {
		await getSingleUser(username).then((user) => {
			this.setState({ user: user.data });
		});
	};

	render() {
		const { users, user } = this.state;
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route
						exact
						path="/"
						component={() => <UsersPreview users={users} searchForUsers={this.searchForUsers} />}
					/>
					<Route exact path="/user/:login" render={(props) => <UserProfile {...props} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
