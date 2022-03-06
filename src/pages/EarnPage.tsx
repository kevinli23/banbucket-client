import React from 'react';

import { RefFaucets, OtherFaucets } from '../constants/info';

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
} from '@chakra-ui/react';

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
		<Link
			href={props.link}
			target="_blank"
			_hover={{ textDecoration: 'none', backgroundColor: 'white' }}
		>
			<Box
				id={props.name}
				maxW="sm"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				m="3"
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
		</Link>
	);
};

const OtherFaucetBox = (props: OtherFaucetBoxProps) => {
	return (
		<Link
			href={props.link}
			target="_blank"
			_hover={{ textDecoration: 'none', backgroundColor: 'white' }}
		>
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
				</Box>
			</Box>
		</Link>
	);
};

const EarnPage = () => {
	const refFaucets = RefFaucets;

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
								<OtherFaucetBox {...r} />
							))}
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default EarnPage;
