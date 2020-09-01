import axios from 'axios';

export const getUsers = () => {
	const result = axios.get('https://api.github.com/users');
	return result;
};
