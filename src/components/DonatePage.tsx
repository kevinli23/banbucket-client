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
				backgroundColor: '#212529',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Heading>Page in Progress</Heading>
			<QRCode
				size={128}
				value="ban_1tqnxnmcibdimffy4fe3oqbwiaadnydds4t1mqc7cfokh1g1q954emfqot9c"
			/>
			<Text>
				Donate: ban_1tqnxnmcibdimffy4fe3oqbwiaadnydds4t1mqc7cfokh1g1q954emfqot9c
			</Text>
		</div>
	);
};

export default DonatePage;
