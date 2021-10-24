import React from 'react';
import ClaimBox from '../components/ClaimBox';

const ClaimPage = () => {
	return (
		<div
			className="App"
			style={{
				minWidth: '100vw',
				minHeight: '95vh',
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
