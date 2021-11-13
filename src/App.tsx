import React from 'react';
import DonatePage from './pages/DonatePage';
import ClaimPage from './pages/ClaimPage';
import UpdatePage from './pages/UpdatePage';
import StatsPage from './pages/StatsPage';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div style={{ overflowX: 'hidden' }}>
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route path="/donate">
						<DonatePage />
					</Route>
					<Route path="/updates">
						<UpdatePage />
					</Route>
					<Route path="/stats">
						<StatsPage />
					</Route>
					<Route path="/">
						<ClaimPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
