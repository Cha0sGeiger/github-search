import React from 'react';
import { ReactComponent as Logo } from '../../assets/icons/github-logo.svg';
import './UserCard.styles.scss';

import CustomButton from '../button/CustomButton';

interface Props {
	login: string;
	avatar_url: string;
	html_url: string;
}

const UserCard: React.FC<Props> = ({ login, avatar_url, html_url }) => {
	return (
		<div className="user-card">
			<div className="user-info">
				<img src={avatar_url} alt="user" />
				<h3>{login}</h3>
			</div>
			<div className="github-link">
				<CustomButton type="link" onClick={() => window.open(html_url, '_blank')}>
					GITHUB
				</CustomButton>
			</div>
		</div>
	);
};

export default UserCard;
