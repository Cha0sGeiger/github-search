import React from 'react';

import './Navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/icons/github-logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="logo-container">
					<div className="github-text">Github Search</div>
					<Logo className="github-logo" />
				</div>
				<div className="links-container">
					<Link className="links" to="/">
						Home
					</Link>
					<Link className="links" to="/about">
						About
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
