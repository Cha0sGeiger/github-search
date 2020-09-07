import React, { Component } from 'react';

import './UserProfile.styles.scss';
import CustomButton from '../../components/button/CustomButton';
import { ReactComponent as UserLogo } from '../../assets/icons/users.svg';
import { ReactComponent as Email } from '../../assets/icons/email-black.svg';
import ScrollAnimation from '../../components/scroll-box/ScrollAnimation';

interface UserProps {
	getSingleUser: (username: string) => Promise<void>;
	getUserReposCheck: (username: string) => any;
	getSortedData: (value: string) => any[];
	user: {
		name: string;
		avatar_url: string;
		bio: string;
		followers: number;
		following: number;
		location: string;
		public_repos: number;
		email: string;
		html_url: string;
	};
	match: any;
	repos: Array<Repo>;
}

interface Repo {
	id: number;
	name: string;
	description: string;
	language: string;
	html_url: string;
}

class UserProfile extends Component<UserProps> {
	state = {
		sortedRepos: []
	};

	componentDidMount() {
		this.props.getSingleUser(this.props.match.params.login);
		this.props.getUserReposCheck(this.props.match.params.login);
	}

	getSortedData = (value: string) => {
		let sortedRepos = this.props.getSortedData(value);
		this.setState({ sortedRepos: [ ...sortedRepos ] });
	};

	addUserToFavorite = (user: any) => {
		const favoriteUser = [ ...user ];
		console.log(favoriteUser);
	};

	render() {
		console.log(this.props.repos, 'repos');
		const {
			name,
			avatar_url,
			bio,
			followers,
			following,
			location,
			public_repos,
			email,
			html_url
		} = this.props.user;
		const { sortedRepos } = this.state;
		return (
			<div className="container">
				<div className="profile-container">
					<div className="user">
						<div className="image-container">
							<img src={avatar_url} alt="user" />
						</div>
						<h4>{name}</h4>
						{location ? <h5>Location : {location}</h5> : <h5>Location : undisclosed</h5>}
						<div className="email">
							<Email className="logo" />
							{email ? <p>{email}</p> : <p>UNDISCLOSED</p>}
						</div>

						<div className="following-information-container">
							<UserLogo />
							<p>{followers} FOLLOWERS</p>
							<p>-</p>
							<p>{following} FOLLOWING</p>
						</div>
						<div className="button-container">
							<CustomButton type="link primary" onClick={() => window.open(html_url, '_blank')}>
								GITHUB
							</CustomButton>
						</div>
					</div>
					<div className="repos-wrapper">
						<div className="repos-container">
							<div className="information">
								<h4>Bio:</h4>
								{bio ? <p>{bio}</p> : <p>No bio for this user</p>}
							</div>
							<div className="repos-list">
								<div className="repo-heading">
									<h4>Repos : {public_repos}</h4>
									<div className="button-container">
										<CustomButton type="small" onClick={() => this.getSortedData('asc')}>
											asc
										</CustomButton>
										<CustomButton type="small" onClick={() => this.getSortedData('desc')}>
											desc
										</CustomButton>
										<CustomButton type="small" onClick={() => this.getSortedData('default')}>
											last
										</CustomButton>
									</div>
								</div>
								{sortedRepos.length > 0 ? (
									sortedRepos.map(({ id, name, description, language, html_url }) => (
										<div className="repo-item" key={id}>
											<h2>
												<a href={html_url}>{name}</a>
											</h2>
											<p>{description}</p>
											<div className="flex-start">
												<div className="dot" />
												<p className="language">{language}</p>
											</div>
										</div>
									))
								) : (
									this.props.repos.map(({ id, name, description, language, html_url }) => (
										<div className="repo-item" key={id}>
											<h2>
												<a href={html_url}>{name}</a>
											</h2>
											<p>{description}</p>

											<div className="flex-start">
												<div className="dot" />
												<p className="language">{language}</p>
											</div>
										</div>
									))
								)}
							</div>
						</div>
						{this.props.repos.length > 3 ? <ScrollAnimation /> : null}
					</div>
				</div>
			</div>
		);
	}
}

export default UserProfile;
