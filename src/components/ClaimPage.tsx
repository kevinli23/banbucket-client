import React from 'react';
import ClaimBox from './ClaimBox';

const ClaimPage = () => {
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
			<ClaimBox />
		</div>
	);
};

export default ClaimPage;
