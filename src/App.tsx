import React from 'react';
import DonatePage from './components/DonatePage';
import ClaimPage from './components/ClaimPage';
import UpdatePage from './components/UpdatePage';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/donate">
						<DonatePage />
					</Route>
					<Route path="/updates">
						<UpdatePage />
					</Route>
					<Route path="/">
						<ClaimPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
