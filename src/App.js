import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './screens/Home';

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
			</Router>
		</div>
	);
}

export default App;
