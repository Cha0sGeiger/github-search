import React from 'react';

import './Navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/icons/github-logo.svg';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="logo-container">
					<div className="github-text">Github Search</div>
					<Logo className="github-logo" />
				</div>

				<div className="links-container">
					<span className="links">Home</span>
					<span className="links">Favorites</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
