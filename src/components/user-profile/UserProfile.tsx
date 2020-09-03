import React, { Component } from 'react';

import './UserProfile.styles.scss';

const repos = [ { id: 1, repo: 'higsum' }, { id: 2, repo: 'pollock' } ];

class UserProfile extends Component {
	render() {
		return (
			<div className="container">
				<div className="profile-container">
					<div className="user">
						<img />
						<h4>Name</h4>
						<h5>location</h5>
					</div>
					<div className="repos-container">
						<div className="information">
							<a>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum distinctio
								consequatur. Eligendi officiis iure iste et, at, veritatis facere maxime, voluptatum
								illo repellat repellendus dicta odit quisquam sequi cum!
							</a>
						</div>
						<div className="repos-list">
							{repos.map(({ id, repo }) => (
								<div key={id}>
									<h2>{repo}</h2>
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
