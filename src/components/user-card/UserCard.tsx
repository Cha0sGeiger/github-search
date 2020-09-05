import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/github-logo.svg';
import './UserCard.styles.scss';
import { Link } from 'react-router-dom';

interface Props {
	login: string;
	avatar_url: string;
	html_url: string;
}

const UserCard: React.FC<Props> = ({ login, avatar_url, html_url }) => {
	return (
		<div className="user-card">
			<div className="user-image">
				<img src={avatar_url} alt="user" />
				<Logo className="logo-small" onClick={() => window.open(html_url, '_blank')} />
			</div>
			<div className="user-info">
				<div className="username">
					<h5>Username:</h5>
					<h3>{login}</h3>
				</div>
				<div className="link-container">
					<Link className="link" to={`/user/${login}`}>
						PROFILE
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
