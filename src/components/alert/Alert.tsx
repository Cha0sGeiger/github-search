import React from 'react';

import './Alert.styles.scss';

interface Props {
	message: any;
}

const Alert: React.FC<Props> = ({ message }) => {
	return <div className="alert">{message}</div>;
};

export default Alert;
