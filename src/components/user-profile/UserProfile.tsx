import React, { Component } from 'react';

import './UserProfile.styles.scss';
import CustomButton from '../button/CustomButton';
import { ReactComponent as UserLogo } from '../../assets/icons/users.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { AxiosResponse } from 'axios';
import { getSingleUser } from '../../services/apiCall';

const repos = [ { id: 1, repo: 'higsum' }, { id: 2, repo: 'pollock' } ];

interface UserProps {
	getSingleUser: (username: string) => Promise<void>;
	user: { name: string; avatar_url: string };
	match: any;
}

class UserProfile extends Component<UserProps> {
	componentDidMount() {
		console.log('pali se ');
		console.log(this.props.match.params.login);
		this.props.getSingleUser(this.props.match.params.login);
		console.log(this.props.user, 'user');
	}

	render() {
		const { name, avatar_url } = this.props.user;
		return (
			<div className="container">
				<div className="profile-container">
					<div className="user">
						<div className="image-container">
							<img src={avatar_url} />
						</div>
						<h4>{name}</h4>
						<h5>Location : Zagreb</h5>
						<div className="following-information-container">
							<UserLogo />
							<p>22 FOLLOWERS</p>
							<p>15 FOLLOWING</p>
							<div className="star-container">
								<Star />
							</div>
							<p>3 starred</p>
						</div>
						<div className="button-container">
							<CustomButton type="link" onClick={() => console.log('text')}>
								GITHUB
							</CustomButton>
						</div>
					</div>
					<div className="repos-container">
						<div className="information">
							<h4>Bio:</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis corrupti
								laudantium eveniet molestias minima facilis pariatur. Amet quia ipsam sapiente sint eos
								sit nihil, recusandae reiciendis sequi voluptatem ex.
							</p>
						</div>
						<div className="repos-list">
							<div className="repo-heading">
								<h4>Repos:</h4>
								<CustomButton type="sort" onClick={() => console.log('sort')}>
									Sort
								</CustomButton>
							</div>
							{repos.map(({ id, repo }) => (
								<div className="repo-item" key={id}>
									<h2>{repo}</h2>
									<p>description</p>
									<div className="flex-start">
										<div className="dot" />
										<p className="language">Javascript</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UserProfile;
