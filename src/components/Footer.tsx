import React from 'react';
import QRCode from 'react-qr-code';

import { Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				minWidth: '100vw',
				paddingLeft: '10px',
				marginBottom: '20px',
			}}
		>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text mt="10px" fontSize="2xl">
						Donate!
					</Text>
					<QRCode
						size={100}
						value="ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
