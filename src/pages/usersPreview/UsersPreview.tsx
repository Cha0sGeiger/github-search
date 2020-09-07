import React, { Component } from 'react';

import './UsersPreview.styles.scss';
import SearchInput from '../../components/search-input/Search.input';
import CustomButton from '../../components/button/CustomButton';
import UserCard from '../../components/user-card/UserCard';
import Alert from '../../components/alert/Alert';

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
		search: '',
		alert: null
	};

	handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		if (this.state.search === '') {
			this.setAlert('! This should not be empty');
		} else {
			event.preventDefault();
			this.props.searchForUsers(this.state.search);
			this.setState({ search: '' });
		}
	};

	setAlert = (message: string) => {
		this.setState({ alert: message });
		setTimeout(() => this.setState({ alert: null }), 5000);
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="container">
				<div className="user-preview">
					<div className="form-container">
						<Alert message={this.state.alert} />
						<form className="form">
							<SearchInput
								name="search"
								type="search"
								value={this.state.search}
								handleChange={this.handleChange}
								label="Search for user"
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
