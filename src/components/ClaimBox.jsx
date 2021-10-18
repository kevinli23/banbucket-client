import React, { useState, useRef, useEffect } from 'react';

import { Input, Button, Text, Heading} from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import IconRow from './IconRow';
import QRCode from 'react-qr-code';
import { ReactComponent as BanIcon } from '../banicon.svg';

const ClaimBox = () => {
	const [addr, setAddr] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [captcha, setCaptcha] = useState('');
	const [isErr, setIsErr] = useState(true);
	const [msg, setMsg] = useState('Please enter a valid Banano address');
	const [showMsg, setShowMsg] = useState(false);
	const [loading, setLoading] = useState(false);
	const [amount, setAmount] = useState(0)

	useEffect(() => {
		(
			async () => {
				await fetch("https://banbucket.herokuapp.com/api/v1/amount", {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}).then(async (res) => {
					const json = await res.json()
					setAmount(json.message)
				}).catch((_err) => {
					setAmount(0)
					return
				})
			}
		)()
	})

	const captchaRef = useRef(null);

	const handleChange = (event) => {
		setAddr(event.target.value);
		setIsValid(
			event.target.value.startsWith('ban_') && event.target.value.length === 64
		);
	};

	return (
		<>
		<Heading mt="20px" color="#E4C703" fontFamily="Aleo, serif" size="3xl">BanBucket</Heading>
		<div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
			<Text color="white" fontSize="xl" m="5px">{amount}</Text>
			<BanIcon style={{ width: "20px", height: "20px" }} />
		</div>
			<div style={{ minHeight: '30px' }}>
				{((!isValid && addr !== '') || showMsg) && (
					<Text fontSize="lg" color={isErr ? 'red.500' : 'green.500'}>
						{msg}
					</Text>
				)}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					minWidth: '300px',
				}}
			>
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
					onVerify={(token, _ekey) => {
						setCaptcha(token);
					}}
					theme="dark"
					ref={captchaRef}
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
						captchaRef.current.resetCaptcha()
						var failed = false

						if (!failed) {
							const requestOptions = {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({ addr: addr, captcha: captcha }),
							};
							var failed = false
							const response = await fetch(
								'https://banbucket.herokuapp.com/api/v1/claim',
								requestOptions
							).catch((_) => {
								setShowMsg(true);
								setLoading(false);
								setIsErr(true);
								setMsg("Failed to connect to server")
								failed = true
							});
	
							if (!failed) {
								const data = await response.json();
		
								setShowMsg(true);
								setLoading(false);
		
								setIsErr(response.status === 400 || response.status === 500);
		
								setMsg(data.message);
							}
						}
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
		</>
	);
};

export default ClaimBox;
