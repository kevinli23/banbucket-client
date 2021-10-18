import React from 'react';
import ClaimBox from './components/ClaimBox';
import DonatePage from './components/DonatePage';
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
						<div
							className="App"
							style={{
								minWidth: '100vw',
								minHeight: '100vh',
								backgroundColor: '#212529',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{/* <div style={{ marginTop: 'auto' }}> */}
							<ClaimBox />
							{/* </div> */}
							{/* <div style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>
				<Footer />
			</div> */}
						</div>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
