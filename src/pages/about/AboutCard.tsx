import React from 'react';

import './AboutCard.styles.scss';
import { searchingInfo, queryResult, profilePage } from '../../assets/text/about.json';
import { ReactComponent as Logo } from '../../assets/icons/github-logo.svg';

const GreetingCard = () => {
	return (
		<section className="container">
			<div className="info-block">
				<div className="block">
					<h4>SEARCHING FOR USERS</h4>
					<div className="flex-start">
						<p>&#8226; {searchingInfo.search}</p>
						<p>{queryResult.query}</p>
					</div>
					<div>
						<h4>SEARCH RESULTS</h4>
						<div className="flex-start">
							<p>&#8226; {queryResult.profile}</p>
							<p className="profile-example">PROFILE</p>
						</div>
						<div className="flex-start">
							<p>&#8226; {queryResult.github}</p>
							<Logo className="github-logo" />
						</div>
						<h4>PROFILE PAGE</h4>
						<p>&#8226; {profilePage.information}</p>
						<p>&#8226; {profilePage.repos}</p>
						<p>&#8226; {profilePage.repo_item}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GreetingCard;
