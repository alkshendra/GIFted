import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';

function App() {
	return (
		<div className="App">
			<Router>
				<Route
					key="landingPage"
					path="/"
					component={Home}
					exact
				/>
				<Route
					key="searchPage"
					path="/search/:searchTerm"
					component={Home}
				/>
			</Router>
		</div>
	);
}

export default App;
