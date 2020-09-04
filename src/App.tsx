import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { getUsers, getSingleUser, getUserRepos } from './services/apiCall';

import Navbar from './components/navbar/Navbar';
import UsersPreview from './pages/usersPreview/UsersPreview';
import UserProfile from './pages/user-profile/UserProfile';

interface Users {
	users: Array<any>;
	user: any;
	repos: Array<any>;
}

class App extends Component {
	state: Users = {
		users: [],
		user: {},
		repos: []
	};

	searchForUsers = async (value: string) => {
		await getUsers(value).then((users) => {
			this.setState({ users: users.data.items });
		});
	};

	getSingleUser = async (username: string) => {
		await getSingleUser(username).then((user) => {
			this.setState({ user: user.data });
		});
		console.log(this.state.user, 'user u tsx');
	};

	getUserRepos = async (username: string) => {
		await getUserRepos(username).then((repo) => {
			this.setState({ repos: repo.data });
		});
		console.log(this.state.repos, 'user u tsx');
	};

	getSortedRepos = (value: string) => {
		console.log('print prva vrijednost');
		if (value === 'asc') {
			const ascending = [ ...this.state.repos ].sort(
				(a: { name: string }, b: { name: string }) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
			);
			return ascending;
		} else if (value === 'desc') {
			console.log('drg');
			const descending = [ ...this.state.repos ].sort(
				(a: { name: string }, b: { name: string }) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1)
			);
			console.log(descending, 'desce');
			return descending;
		} else {
			return [ ...this.state.repos ];
		}
	};

	render() {
		const { users, user, repos } = this.state;
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route
						exact
						path="/"
						component={() => <UsersPreview users={users} searchForUsers={this.searchForUsers} />}
					/>
					<Route
						exact
						path="/user/:login"
						render={(props) => (
							<UserProfile
								{...props}
								user={user}
								repos={repos}
								getSingleUser={this.getSingleUser}
								getUserRepos={this.getUserRepos}
								getSortedData={this.getSortedRepos}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
