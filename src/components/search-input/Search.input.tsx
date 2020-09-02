import React from 'react';
import './Search.styles.scss';

interface Props {
	label: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	value: string;
	type: string;
}

const SearchInput: React.FC<Props> = ({ label, handleChange, name, type, value }) => {
	return (
		<div className="group">
			<input className="search-input" onChange={handleChange} value={value} name={name} />
			{label ? <label className={`${value.length ? 'shrink' : ''} search-input-label`}> {label} </label> : null}
		</div>
	);
};

export default SearchInput;
