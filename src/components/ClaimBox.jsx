import React, { useState, useRef, useEffect } from 'react';

import {
	Input,
	Button,
	Text,
	Heading,
	useToast,
	Tag,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	Link,
} from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import IconRow from './IconRow';
import { ReactComponent as BanIcon } from '../banicon.svg';

const ClaimBox = () => {
	const [addr, setAddr] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [captcha, setCaptcha] = useState('');
	const [msg, setMsg] = useState('Please enter a valid Banano address');
	const [loading, setLoading] = useState(false);
	const [amount, setAmount] = useState(0);
	const [price, setPrice] = useState('0');
	const [change, setChange] = useState('0');
	const toast = useToast();

	useEffect(() => {
		(async () => {
			await fetch('https://banbucket.herokuapp.com/api/v1/amount', {
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
	}, [loading]);

	useEffect(() => {
		(async () => {
			await fetch('https://banbucket.herokuapp.com/api/v1/price', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					setPrice(json.price);
					setChange(json.change);
				})
				.catch((_err) => {
					return;
				});
		})();
	}, [price, change]);

	const captchaRef = useRef(null);

	const handleChange = (event) => {
		setAddr(event.target.value);
		setIsValid(
			event.target.value.startsWith('ban_') && event.target.value.length === 64
		);
	};

	return (
		<>
			<Heading mt="16vh" color="#E4C703" fontFamily="Aleo, serif" size="3xl">
				BanBucket
			</Heading>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Text color="white" fontSize="xl" m="5px">
					{amount}
				</Text>
				<BanIcon style={{ width: '20px', height: '20px' }} />
			</div>
			<div style={{ minHeight: '30px' }}>
				{!isValid && addr !== '' && (
					<Text fontSize="lg" color="red.500">
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
						captchaRef.current.resetCaptcha();
						var failed = false;

						if (!failed) {
							const requestOptions = {
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({ addr: addr, captcha: captcha }),
							};
							failed = false;
							const response = await fetch(
								'https://banbucket.herokuapp.com/api/v1/claim',
								requestOptions
							).catch((_) => {
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

								failed = true;
							});

							if (!failed) {
								const data = await response.json();

								if (response.status === 400 || response.status === 500) {
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
								setCaptcha('');
							}
						}
					}}
				>
					Claim Free Banano
				</Button>
				<Tag mt="10px" color="white" backgroundColor="red.600">
					abusers will be blacklisted
				</Tag>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							marginTop: '20px',
						}}
					>
						<Stat color="white">
							<StatLabel display="flex" flexDirection="row">
								<Text color="#E4C703" mr="5px">
									BAN
								</Text>
								(from
								<Link
									href="https://www.coingecko.com/en/coins/banano"
									ml="5px"
									_hover={{
										textDecoration: 'none',
										color: 'rgb(140, 198, 63)',
									}}
									_link={{
										textDecoration: 'none',
									}}
									_focus={{
										textDecoration: 'none',
									}}
									isExternal
									color="white"
								>
									CoinGecko
								</Link>
								)
							</StatLabel>
							<StatNumber>$ {price} USD</StatNumber>
							<StatHelpText color={change.charAt(0) === '-' ? 'red.400' : 'green.400'}>
								<StatArrow type={change.charAt(0) === '-' ? 'decrease' : 'increase'} />
								{change}% (24h)
							</StatHelpText>
						</Stat>
					</div>
				</div>
				<IconRow />
			</div>
		</>
	);
};

export default ClaimBox;
