import React from 'react';
import QRCode from 'react-qr-code';
import { Text, Heading } from '@chakra-ui/react';

const DonatePage = () => {
	return (
		<div
			className="App"
			style={{
				minWidth: '100vw',
				minHeight: '100vh',
				maxWidth: '100vw',
				backgroundColor: '#212529',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'white',
			}}
		>
			<Heading m="10px" color="white">
				Page in Progress
			</Heading>
			<QRCode
				size={128}
				value="ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"
			/>
			<Text m="10px" color="white">
				Donate: ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu
			</Text>
		</div>
	);
};

export default DonatePage;
