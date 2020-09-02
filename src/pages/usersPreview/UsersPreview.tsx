import React, { Component } from 'react';

import './UsersPreview.styles.scss';
import SearchInput from '../../components/search-input/Search.input';
import CustomButton from '../../components/button/CustomButton';

const users = [
	{
		id: 1,
		login: 'mojombo',
		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
		html_url: 'https://github.com/mojombo'
	},
	{
		id: 2,
		login: 'defunkt',
		avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
		html_url: 'https://github.com/defunkt'
	},
	{
		id: 3,
		login: 'defunkt',
		avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
		html_url: 'https://github.com/defunkt'
	},
	{
		id: 4,
		login: 'defunkt',
		avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
		html_url: 'https://github.com/defunkt'
	},
	{
		id: 5,
		login: 'defunkt',
		avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
		html_url: 'https://github.com/defunkt'
	}
];

class UsersPreview extends Component {
	state = {
		search: ''
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { value, name } = event.target;
		console.log(event.target.value, 'event', this.state.search, 'state');

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="container">
				<div className="user-preview">
					<div className="form-container">
						<form className="form">
							<SearchInput
								name="search"
								type="search"
								value={this.state.search}
								handleChange={this.handleChange}
								label="Search for User"
							/>
						</form>
						<div className="button">
							<CustomButton type="primary">Search</CustomButton>
						</div>
					</div>
					<div className="users-container">
						{users.map(({ id, login, avatar_url, html_url }) => (
							<div className="user-profile" key={id}>
								<img className="profile-image" src={avatar_url} alt="user" />
								<span>{login}</span>
								<a href={html_url} className="link">
									Github
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default UsersPreview;
