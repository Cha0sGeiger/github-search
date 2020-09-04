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
			<div className="user-info">
				<img src={avatar_url} alt="user" />
				<div>
					<h4>{login}</h4>
					<Logo className="logo-small" onClick={() => window.open(html_url, '_blank')} />
				</div>
			</div>
			<div className="github-link">
				{/* <CustomButton type="link" onClick={() => console.log('bok')}>
					VIEW PROFILE
				</CustomButton> */}
				<Link className="link" to={`/user/${login}`}>
					USER PROFILE
				</Link>
			</div>
		</div>
	);
};

export default UserCard;
