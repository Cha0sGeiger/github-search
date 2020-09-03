import axios from 'axios';

export const getUsers = (value: string) => {
	const result = axios.get(
		`https://api.github.com/search/users?q=${value}&client_id=${process.env
			.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	);
	return result;
};

export const getSingleUser = (username: string) => {
	const result = axios.get(
		`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process
			.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	);
	return result;
};
