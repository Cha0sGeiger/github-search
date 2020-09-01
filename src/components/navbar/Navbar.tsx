import React from 'react';

import './Navbar.styles.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="github-icon">Ikona</div>
				<div className="links-container">
					<span className="links">Home</span>
					<span className="links">Favorites</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
