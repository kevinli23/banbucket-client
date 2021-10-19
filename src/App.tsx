import React from 'react';
import DonatePage from './components/DonatePage';
import ClaimPage from './components/ClaimPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/donate">
						<DonatePage />
					</Route>
					<Route path="/">
						<ClaimPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
