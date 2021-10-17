import React from 'react';
import ClaimBox from './components/ClaimBox';
import './App.css';

function App() {
	return (
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
	);
}

export default App;
