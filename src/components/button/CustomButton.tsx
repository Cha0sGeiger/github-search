import React from 'react';
import './CustomButton.styles.scss';

interface Button {
	type: string;
	children: string;
	onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}

const CustomButton: React.FC<Button> = ({ type, children, onClick }) => (
	<button className={`${type} custom-button`} onClick={onClick}>
		{children}
	</button>
);

export default CustomButton;
