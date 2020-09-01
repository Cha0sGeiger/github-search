import React from 'react';

import './UsersPreview.styles.scss';

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
	}
];

const UsersPreview = () => {
	return (
		<div className="container">
			<div className="user-preview">
				{users.map(({ id, login, avatar_url, html_url }) => (
					<div key={id}>
						<img className="profile-image" src={avatar_url} alt="user" />
						<span>{login}</span>
						<a href={html_url} className="link">
							Github
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default UsersPreview;
