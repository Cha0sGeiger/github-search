import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import { getUsers, getSingleUser, getUserRepos } from './services/apiCall';

import Navbar from './components/navbar/Navbar';
import UsersPreview from './pages/usersPreview/UsersPreview';
import UserProfile from './pages/user-profile/UserProfile';

interface Users {
	query: string;
	users: Array<any>;
	user: any;
	repos: Array<any>;
}

class App extends Component {
	state: Users = {
		query: '',
		users: [],
		user: {},
		repos: []
	};

	// SEARH FOR USERS
	searchForUsers = async (value: string) => {
		await getUsers(value).then((users) => {
			this.setState({ users: users.data.items });
		});
	};

	// GET SINGLE USER

	getSingleUser = async (username: string) => {
		await getSingleUser(username).then((user) => {
			this.setState({ user: user.data });
		});
		console.log(this.state.user, 'user u tsx');
	};

	// GET SINGLE USER REPO
	getUserRepos = async (username: string) => {
		console.log('palio se ');
		await getUserRepos(username).then((repo) => {
			this.setState({ repos: repo.data });
			this.onSetResult(repo.data, username);
		});
	};

	// SORTING REPOS
	getSortedRepos = (value: string) => {
		if (value === 'asc') {
			const ascending = [ ...this.state.repos ].sort(
				(a: { name: string }, b: { name: string }) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
			);
			return ascending;
		} else if (value === 'desc') {
			const descending = [ ...this.state.repos ].sort(
				(a: { name: string }, b: { name: string }) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1)
			);
			return descending;
		} else {
			return [ ...this.state.repos ];
		}
	};

	// CACHING OR GETTING USER  REPOS BY PROMISE
	getUserReposCheck = (value: string) => {
		console.log(value, 'value');
		if (value === '') {
			return;
		}
		const cachedRepos = localStorage.getItem(value);
		if (cachedRepos) {
			this.setState({ repos: JSON.parse(cachedRepos) });
		} else {
			this.getUserRepos(value);
		}
	};

	onSetResult = (result: object, key: string) => {
		localStorage.setItem(key, JSON.stringify(result));
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
								getUserReposCheck={this.getUserReposCheck}
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
