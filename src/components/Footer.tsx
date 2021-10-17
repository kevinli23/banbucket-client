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
						value="ban_1srfj9ohtnh9zkwuxdscf8n7dqcndks9waurjcorj6aizwagckampump8s4k"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
