import React, { useState, useEffect } from 'react';

import { RefFaucets, OtherFaucets } from '../constants/info';
import { ExternalLinkIcon, CheckIcon, BellIcon } from '@chakra-ui/icons';

import {
	Heading,
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Image,
	Badge,
	Link,
	IconButton,
	Text,
} from '@chakra-ui/react';
import useLocalStorage from '../hooks/localstorage';

interface RefFaucetBoxProps {
	name: string;
	link: string;
	type: string;
	tags: Array<string>;
}

interface OtherFaucetBoxProps {
	name: string;
	link: string;
	type: string;
	ads: boolean;
	rt: string;
	health: number;
	captcha: boolean;
	notificationsEnabled: boolean;
}

const GetColorScheme = (word: string): string => {
	if (word === 'ads') {
		return 'red';
	} else if (word === 'Banano') {
		return 'yellow';
	} else if (word === 'Doge') {
		return 'green';
	} else if (word === 'BTC') {
		return 'orange';
	} else if (word === 'Solana') {
		return 'pink';
	} else if (word === 'Nano') {
		return 'blue';
	}

	return 'teal';
};

const GetIcon = (type: string): string => {
	if (type === 'Banano') {
		return '/banano.ico';
	} else if (type === 'Solana') {
		return '/solicon.png';
	} else if (type === 'Nano') {
		return '/nanoicon.png';
	} else if (type === 'Algorand') {
		return '/algoicon.png';
	}

	return '/reficon.png';
};

const RefFaucetBox = (props: RefFaucetBoxProps) => {
	return (
		<Box
			id={props.name}
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			m="3"
		>
			<Box p="4">
				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
					display="flex"
					flexDirection="row"
					alignItems="center"
				>
					<Image
						src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${props.link}/&size=32`}
						boxSize="25px"
						mr="3"
						mb="1"
					/>
					{props.name}
					<Link
						href={props.link}
						target="_blank"
						_hover={{ textDecoration: 'none' }}
						marginLeft="auto"
						alignSelf="flex-end"
					>
						<IconButton
							colorScheme="purple"
							aria-label="Call Segun"
							size="sm"
							icon={<ExternalLinkIcon />}
						/>
					</Link>
				</Box>
				<Box display="flex" alignItems="baseline">
					{props.tags.map((tag) => (
						<Badge
							id={tag}
							borderRadius="full"
							px="2"
							m="1"
							ml="0"
							colorScheme={GetColorScheme(tag)}
						>
							{tag}
						</Badge>
					))}
				</Box>
			</Box>
		</Box>
	);
};

const OtherFaucetBox = (props: OtherFaucetBoxProps) => {
	const [nextClaim, setNextClaim] = useState('Ready');
	const [lastClaim, setLastClaim] = useLocalStorage(props.name, 0);
	const [currentTime, setCurrentTime] = useState(Date.now());
	const [int, setInt] = useState<number>(-1);

	useEffect(() => {
		var i = window.setInterval(() => {
			setCurrentTime(Date.now());
		}, 1000);

		setInt(i);
	}, [lastClaim]);

	useEffect(() => {
		if (lastClaim >= 0) {
			let nextClaimDate = new Date(lastClaim);

			if (props.rt === '15 Hours') {
				nextClaimDate.setHours(nextClaimDate.getHours() + 15);
			} else if (props.rt === '1 Day') {
				nextClaimDate.setDate(nextClaimDate.getDate() + 1);
			} else if (props.rt === '2 Days') {
				nextClaimDate.setDate(nextClaimDate.getDate() + 2);
			} else if (props.rt === '5 Minutes') {
				nextClaimDate.setMinutes(nextClaimDate.getMinutes() + 5);
			} else if (props.rt === '30 Minutes') {
				nextClaimDate.setMinutes(nextClaimDate.getMinutes() + 30);
			} else if (props.rt === '10 Minutes') {
				nextClaimDate.setMinutes(nextClaimDate.getMinutes() + 10);
			} else if (props.rt === '00:00 UTC') {
				nextClaimDate = new Date(
					Date.UTC(
						nextClaimDate.getUTCFullYear(),
						nextClaimDate.getUTCMonth(),
						nextClaimDate.getUTCDate() + 1,
						0,
						0,
						0,
						0
					)
				);
			}

			const diff = nextClaimDate.getTime() - currentTime;

			if (diff <= 0) {
				window.clearInterval(int);
				showNotification(props.name);
				setNextClaim('Ready');
			} else {
				let hour_rounded = Math.floor(diff / 3600000);

				const minutes = (diff / 3600000 - hour_rounded) * 60;
				let minutes_rounded = Math.floor(minutes);

				let seconds_rounded = Math.floor((minutes - minutes_rounded) * 60);

				setNextClaim(`${hour_rounded}h ${minutes_rounded}m ${seconds_rounded}s`);
			}
		}
	}, [currentTime, lastClaim, props.rt, props.name]);

	function showNotification(faucet: string) {
		if (props.notificationsEnabled) {
			var options = {
				body: `${faucet} is now ready to claim`,
				icon: 'https://www.banbucket.ninja/logo256.ico',
			};

			const notification = new Notification(`BanBucket`, options);

			setTimeout(() => {
				notification.close();
			}, 10 * 1000);

			notification.addEventListener('click', () => {
				window.open('banbucket.ninja/earn', '_blank');
			});
		}
	}

	return (
		<Box
			id={props.name}
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			m="2"
			_hover={{ backgroundColor: '#3c4142' }}
		>
			<Box p="4">
				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
					display="flex"
					flexDirection="row"
					alignItems="center"
				>
					<Image
						src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${props.link}/&size=32`}
						boxSize="25px"
						mr="3"
						mb="1"
					/>
					{props.name}
					<Text
						fontSize="xs"
						color={nextClaim === 'Ready' ? 'green.200' : 'red.200'}
						alignSelf="flex-end"
						marginLeft="auto"
					>
						{nextClaim}
					</Text>
				</Box>
				<Box display="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" m="1" ml="0" colorScheme="green">
						{props.rt}
					</Badge>
					{props.ads && (
						<Badge borderRadius="full" px="2" m="1" ml="0" colorScheme="red">
							ADS
						</Badge>
					)}
					{props.captcha && (
						<Badge borderRadius="full" px="2" m="1" ml="0" colorScheme="red">
							Captcha
						</Badge>
					)}
				</Box>
				<Box display="flex" flexDir="row" justifyContent="flex-start">
					<Link
						href={props.link}
						target="_blank"
						_hover={{ textDecoration: 'none' }}
						marginLeft="auto"
						alignSelf="flex-end"
					>
						<IconButton
							colorScheme="purple"
							aria-label="verify"
							size="sm"
							icon={<ExternalLinkIcon />}
						/>
					</Link>
					<IconButton
						ml="2"
						colorScheme="green"
						aria-label="check"
						size="sm"
						icon={<CheckIcon />}
						onClick={() => setLastClaim(Date.now())}
					/>
				</Box>
			</Box>
		</Box>
	);
};

const EarnPage = () => {
	const refFaucets = RefFaucets;
	const [notificationsEnabled, setNotificationsEnabled] = useLocalStorage(
		'notifs',
		Notification.permission === 'granted'
	);

	useEffect(() => {
		if (notificationsEnabled && Notification.permission !== 'granted') {
			if (!('Notification' in window)) {
				console.log('This browser does not support desktop notification');
			} else {
				Notification.requestPermission();
			}
		}
	}, [notificationsEnabled]);

	return (
		<div
			className="App"
			style={{
				minWidth: '100vw',
				minHeight: '95vh',
				maxWidth: '100vw',
				backgroundColor: '#212529',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				color: 'white',
				overflowX: 'hidden',
				fontFamily: 'SF Mono',
			}}
		>
			<Heading mt="10px" size="2xl" fontFamily="SF Mono" color="#E4C703">
				Earn More Crypto
			</Heading>
			<IconButton
				mt="2"
				colorScheme={notificationsEnabled ? 'green' : 'red'}
				aria-label="notifications"
				size="md"
				icon={<BellIcon />}
				onClick={() => setNotificationsEnabled(!notificationsEnabled)}
			/>
			<Accordion
				allowMultiple
				defaultIndex={[0]}
				allowToggle
				maxW="325px"
				minW="325px"
				margin="10px"
			>
				<AccordionItem border="none">
					<h2>
						<AccordionButton>
							<Image src="/reficon.png" boxSize="30px" />
							<Box flex="1" textAlign="left">
								Referral Faucets
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						{refFaucets.map((r) => (
							<RefFaucetBox {...r} />
						))}
					</AccordionPanel>
				</AccordionItem>

				{['Banano', 'Nano', 'Solana', 'Algorand'].map((t) => (
					<AccordionItem border="none" id={t}>
						<h2>
							<AccordionButton>
								<Image src={GetIcon(t)} mr="2" boxSize="30px" />
								<Box flex="1" textAlign="left">
									{t} Faucets
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							{OtherFaucets.filter((x) => x.type === t).map((r) => (
								<OtherFaucetBox notificationsEnabled {...r} />
							))}
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default EarnPage;
