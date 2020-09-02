import React from 'react';
import './CustomButton.styles.scss';

interface Button {
	type: string;
	children: string;
}

const CustomButton: React.FC<Button> = ({ type, children }) => (
	<button className={`${type} custom-button`}>{children}</button>
);

export default CustomButton;
