import React, { useState, useRef, useEffect } from 'react';

import {
	Input,
	Button,
	Text,
	Heading,
	useToast,
	Tag,
	Link,
} from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { ReactComponent as BanIcon } from '../banicon.svg';
import PriceBox from '../components/PriceBox'

import { DownloadIcon, InfoOutlineIcon } from '@chakra-ui/icons'

import useLocalStorage from '../hooks/localstorage'

const ClaimBox = () => {
	const [addr, setAddr] = useLocalStorage("ban_addr", "")
	const [isValid, setIsValid] = useState(false);
	const [captcha, setCaptcha] = useState('');
	const [msg, setMsg] = useState('Please enter a valid Banano address');
	const [loading, setLoading] = useState(false);
	const [amount, setAmount] = useState(0);
	const toast = useToast();

	useEffect(() => {
		setIsValid(
			addr.startsWith('ban_') && addr.length === 64
		);
	}, [addr])

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

	const captchaRef = useRef(null);

	const handleChange = (event) => {
		setAddr(event.target.value);
		setIsValid(
			event.target.value.startsWith('ban_') && event.target.value.length === 64
		);
	};

	return (
		<>
						<Link
				href="https://www.reddit.com/r/banano/comments/qeuig8/banbucket_faucet_change_your_rep_to_earn_more/"
				_hover={{
					textDecoration: 'none',
				}}
				_link={{
					textDecoration: 'none',
				}}
				_focus={{
					textDecoration: 'none',
				}}
				isExternal
			>
				<Button mt="-5vh" mb="5vh" fontSize="lg" padding="10px" colorScheme="teal" fontFamily="Roboto, sans-serif" maxWidth="300px" leftIcon={<InfoOutlineIcon />}>
					 Change your REP to earn more
				</Button>
					</Link>
			<Heading color="#E4C703" fontFamily="Aleo, serif" size="4xl">
				BanBucket
			</Heading>
			<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', minWidth: '300px', maxWidth: '300px', marginBottom: '10px' }}>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start', 
					minWidth: '125px'
				}}>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
						<Text color="white" fontSize="xl" m="5px">
							{amount}
						</Text>
						<BanIcon style={{ width: '20px', height: '20px' }} />
					</div>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '12px'}}>
						<DownloadIcon color="white" fontSize="xl"/>
						<Text color="white" fontSize="xl" m="5px">
							0.10 
						</Text>
						<BanIcon style={{ width: '20px', height: '20px' }} />
					</div>
				</div>
				<PriceBox />
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
				{/* <IconRow /> */}
			</div>
		</>
	);
};

export default ClaimBox;
