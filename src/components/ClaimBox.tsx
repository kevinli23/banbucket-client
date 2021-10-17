import React, { useState } from 'react';

import { Input, Button, Text } from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import IconRow from './IconRow';
import QRCode from 'react-qr-code';

const ClaimBox = () => {
	const [addr, setAddr] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [captcha, setCaptcha] = useState('');
	const [isErr, setIsErr] = useState(true);
	const [msg, setMsg] = useState('Please enter a valid Banano address');
	const [showMsg, setShowMsg] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddr(event.target.value);
		setIsValid(
			event.target.value.startsWith('ban_') && event.target.value.length === 64
		);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minWidth: '300px',
				marginTop: '30px',
			}}
		>
			<div style={{ minHeight: '30px' }}>
				{((!isValid && addr !== '') || showMsg) && (
					<Text fontSize="lg" color={isErr ? 'red.500' : 'green.500'}>
						{msg}
					</Text>
				)}
			</div>
			<Input
				mb="10px"
				value={addr}
				onChange={handleChange}
				size="md"
				color="white"
				borderColor="white"
				focusBorderColor="#E4C703"
				_hover={{
					borderColor: '#E4C703',
				}}
				isInvalid={!isValid && addr !== ''}
				placeholder="Enter your Banano address"
			/>
			<HCaptcha
				sitekey="abef2c9f-abd9-4ebe-a315-384c3228cd11"
				onVerify={(token: string) => {
					setCaptcha(token);
				}}
				theme="dark"
			/>
			<Button
				mt="10px"
				color="black"
				width="300px"
				backgroundColor="#E4C703"
				_hover={{
					backgroundColor: '#FCB600',
				}}
				size="lg"
				disabled={!isValid || addr.length !== 64 || captcha.length === 0}
				isLoading={loading}
				onClick={async () => {
					setLoading(true);
					const requestOptions = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ addr: addr, captcha: captcha }),
					};
					// fetch
					const response = await fetch(
						'https://banbucket.herokuapp.com/api/v1/claim',
						requestOptions
					);
					const data = await response.json();

					setShowMsg(true);
					setLoading(false);

					setIsErr(response.status === 400 || response.status === 500);

					setMsg(data.message);
				}}
			>
				Claim Free Banano
			</Button>
			<Text color="white" mt="20px" mb="5px" fontSize="xl">
				Learn More
			</Text>
			<IconRow />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text color="white" mt="30px" fontSize="2xl">
					Donate!
				</Text>
				<QRCode
					size={100}
					value="ban_1tqnxnmcibdimffy4fe3oqbwiaadnydds4t1mqc7cfokh1g1q954emfqot9c"
				/>
			</div>
		</div>
	);
};

export default ClaimBox;
