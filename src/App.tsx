import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route />
				</Switch>
			</div>
		);
	}
}

export default App;
