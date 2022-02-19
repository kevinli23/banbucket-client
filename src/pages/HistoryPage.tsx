import React, { useState, useEffect } from 'react';

import {
	Box,
	Text,
	Spinner,
	Heading,
	Link,
	useMediaQuery,
} from '@chakra-ui/react';

import { TransactionProps } from '../types/banbucket-types';

const TransactionCard = (props: TransactionProps) => {
	const [isMobile] = useMediaQuery('(max-width: 820px)');

	return (
		<Link
			href={`https://creeper.banano.cc/explorer/block/${props.hash}`}
			_hover={{ textDecoration: 'none' }}
			target="_blank"
		>
			<Box
				bg="#15202B"
				m="5px"
				color="white"
				maxWidth={isMobile ? '375px' : '800px'}
				minWidth={isMobile ? '375px' : '800px'}
				p="5px"
				borderRadius="20px"
				id={props.hash}
				display="flex"
				flexDir="row"
				alignItems="center"
				_hover={{ bg: '#192734' }}
			>
				<img
					src={`https://monkey.banano.cc/api/v1/monkey/${props.address}`}
					alt="monkey"
					height="80px"
					width="80px"
				/>
				<Box display="flex" flexDir="column">
					<Box
						maxWidth={isMobile ? '200px' : '490px'}
						minWidth={isMobile ? '200px' : '490px'}
					>
						<Text fontSize="sm">{props.address}</Text>
					</Box>
					<Box
						mt="5px"
						maxWidth={isMobile ? '200px' : '490px'}
						minWidth={isMobile ? '200px' : '490px'}
					>
						<Text fontSize="xs" color="yellow.200">
							{props.hash}
						</Text>
					</Box>
					<Box
						mt="5px"
						maxWidth={isMobile ? '200px' : '490px'}
						minWidth={isMobile ? '200px' : '490px'}
					>
						<Text fontSize="xs">{props.date}</Text>
					</Box>
				</Box>
				<Box display="flex" flexDir="column" marginLeft="auto" mr="15px">
					<Text
						color={props.type === 'receive' ? 'green.300' : 'red.300'}
						fontSize="lg"
					>
						{props.type === 'receive' ? '+' : '-'}
						{Math.round(10000 * props.amount) / 10000}
					</Text>
				</Box>
			</Box>
		</Link>
	);
};

const HistoryPage = () => {
	const [transactions, setTransactions] = useState<Array<TransactionProps>>([]);
	const [donations, setDonations] = useState<Array<TransactionProps>>([]);
	const [error, setError] = useState<String>('');

	useEffect(() => {
		(async () => {
			await fetch(`https://banbucket-infoservice.vercel.app/api/transactions`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					setTransactions(json);
				})
				.catch((err) => {
					setError('Failed to load transactions' + err);
					return;
				});

			await fetch(`https://banbucket-infoservice.vercel.app/api/donations`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					setDonations(json);
				})
				.catch((err) => {
					setError('Failed to load donations' + err);
					return;
				});
		})();
	}, []);

	return (
		<div
			className="App"
			style={{
				minWidth: '100vw',
				minHeight: '95vh',
				maxHeight: '95vh',
				maxWidth: '100vw',
				backgroundColor: '#212529',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				color: 'white',
				overflowY: 'scroll',
			}}
		>
			{donations.length > 0 ? (
				<>
					{' '}
					<Heading
						color="green.300"
						fontFamily="Open Sans, sans-serif"
						fontSize="4xl"
						mt="10px"
					>
						Recent Donations
					</Heading>
					{donations.map((donation) => (
						<TransactionCard {...donation} />
					))}
					<Heading
						color="red.300"
						fontFamily="Open Sans, sans-serif"
						fontSize="4xl"
						mt="10px"
					>
						Recent Claims
					</Heading>
					{transactions.map((transaction) => (
						<TransactionCard {...transaction} />
					))}
				</>
			) : (
				<Box minH="95vh" display="flex" alignItems="center" justifyContent="center">
					<Spinner color="yellow.300" size="xl" />
				</Box>
			)}
		</div>
	);
};

export default HistoryPage;
