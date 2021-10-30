import React, { useState, useRef, useEffect } from 'react';

import { Input, Button, useToast } from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Header from './Header';

import useLocalStorage from '../hooks/localstorage';

const ClaimBox = () => {
	const [addr, setAddr] = useLocalStorage('ban_addr', '');
	const [isValid, setIsValid] = useState(false);
	const [loading, setLoading] = useState(false);
	const [amount, setAmount] = useState(0);
	const toast = useToast();

	const apiLocation = 'https://banbucket.herokuapp.com';

	useEffect(() => {
		setIsValid(addr.startsWith('ban_') && addr.length === 64);
	}, [addr]);

	useEffect(() => {
		(async () => {
			await fetch(`${apiLocation}/api/v1/amount`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					setAmount(json.message);
				})
				.catch((_err) => {
					setAmount(0);
					return;
				});
		})();
	}, [loading, apiLocation]);

	const captchaRef = useRef<HCaptcha>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAddr(event.target.value);
		setIsValid(
			event.target.value.startsWith('ban_') && event.target.value.length === 64
		);
	};

	return (
		<div
			style={{
				marginTop: 'auto',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Header amount={amount} />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					minWidth: '300px',
					maxWidth: '300px',
					marginTop: '10px',
				}}
			>
				<Input
					mb="10px"
					value={addr}
					onChange={handleChange}
					size="md"
					color="white"
					borderColor={addr.length === 0 ? 'white' : isValid ? 'green' : 'red'}
					focusBorderColor="#E4C703"
					_hover={{
						borderColor: '#E4C703',
					}}
					isInvalid={!isValid && addr !== ''}
					placeholder="Enter your Banano address"
				/>
				<HCaptcha
					sitekey="abef2c9f-abd9-4ebe-a315-384c3228cd11"
					onVerify={async (token) => {
						setLoading(true);
						var failed = false;

						if (!failed) {
							const requestOptions = {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({ addr: addr, captcha: token }),
							};
							failed = false;
							await fetch(`${apiLocation}/api/v1/claim`, requestOptions)
								.then(async (res) => {
									const data = await res.json();

									if (res.status === 400 || res.status === 500) {
										toast({
											title: 'Bad Request',
											description: data.message,
											status: 'error',
											duration: 2500,
											isClosable: true,
											position: 'top',
										});
									} else {
										toast({
											title: 'Successful Claim',
											description: data.message,
											status: 'success',
											duration: 2500,
											isClosable: true,
											position: 'top',
										});
									}

									setLoading(false);
								})
								.catch((_) => {
									setLoading(false);

									if (!toast.isActive('server-connection')) {
										toast({
											id: 'server-connection',
											title: 'Connection Error',
											description: 'Failed to connect to server',
											status: 'error',
											duration: 3000,
											isClosable: true,
											position: 'top',
										});
									}
								});
						}
					}}
					size="invisible"
					theme="dark"
					ref={captchaRef}
				/>
				<Button
					mt="10px"
					color="#231F20"
					width="300px"
					backgroundColor="#E4C703"
					_hover={{
						backgroundColor: '#FCB600',
					}}
					size="lg"
					disabled={!isValid || addr.length !== 64}
					isLoading={loading}
					onClick={() => {
						if (captchaRef && captchaRef.current) {
							captchaRef.current.execute();
						}
					}}
					fontFamily="Roboto, sans-serif"
				>
					Claim Free Banano
				</Button>
			</div>
		</div>
	);
};

export default ClaimBox;
