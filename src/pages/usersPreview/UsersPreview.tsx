import React, { Component } from 'react';

import './UsersPreview.styles.scss';
import SearchInput from '../../components/search-input/Search.input';
import CustomButton from '../../components/button/CustomButton';
import UserCard from '../../components/user-card/UserCard';

/* const users = [
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
]; */

interface SearchProps {
	users: Array<UserProps>;
	searchForUsers: any;
}

interface UserProps {
	id: number;
	login: string;
	avatar_url: string;
	html_url: string;
}
class UsersPreview extends Component<SearchProps> {
	state = {
		search: ''
	};

	handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault();
		this.props.searchForUsers(this.state.search);
		this.setState({ search: '' });
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		console.log(this.props.users);
		/* const {id, login, avatar_url, html_url} = this.props; */

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
							<CustomButton onClick={this.handleSubmit} type="primary">
								Search
							</CustomButton>
						</div>
					</div>
					<div className="users-container">
						{this.props.users.map(({ id, login, avatar_url, html_url }) => (
							<UserCard key={id} login={login} avatar_url={avatar_url} html_url={html_url} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default UsersPreview;
