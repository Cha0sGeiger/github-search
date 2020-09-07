import React from 'react';

import './ScrollAnimation.styles.scss';

const ScrollAnimation = () => {
	return (
		<div className="scroll-box">
			<div>
				<p className="small-info">SCROLL ON REPO LIST</p>
				<div className="animate-scroll">
					<span />
					<span />
					<span />
				</div>
			</div>
		</div>
	);
};

export default ScrollAnimation;
