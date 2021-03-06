import React, { useEffect, useState } from 'react';
import {
	Button,
	Heading,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	useClipboard,
	useToast,
	useMediaQuery,
	VStack,
} from '@chakra-ui/react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import DonationPedestal from '../components/DonationPedestal';
import DonationEntry from '../components/DonationEntry';

interface Donator {
	addr: string;
	amount: number;
}

const GetColor = (index: number) => {
	if (index === 0) {
		return '#FFD700';
	} else if (index === 1) {
		return '#d8d8d8';
	} else if (index === 2) {
		return '#b08d57';
	}

	return 'white';
};

const DonatePage = () => {
	const [donators, setDonators] = useState([
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 2000,
		},
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 1000,
		},
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 20,
		},
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 1,
		},
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 1,
		},
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 1,
		},
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 1,
		},
	]);
	const apiLocation = 'https://banbucket.herokuapp.com';

	const { hasCopied, onCopy } = useClipboard(
		'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu'
	);
	const toast = useToast();
	const [isMobile] = useMediaQuery('(max-width: 1024px)');

	useEffect(() => {
		if (!toast.isActive('copied') && hasCopied) {
			toast({
				id: 'copied',
				title: 'Copy',
				description: 'Faucet Address copied to clipboard',
				status: 'info',
				duration: 3000,
				isClosable: true,
				position: 'top',
			});
		}
	}, [hasCopied, toast]);

	useEffect(() => {
		(async () => {
			await fetch(`${apiLocation}/api/v1/donators`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					var arr = json.donators;

					arr.sort((donator1: Donator, donator2: Donator) => {
						if (donator1['amount'] > donator2['amount']) {
							return -1;
						} else if (donator1['amount'] < donator2['amount']) {
							return 1;
						}
						return 0;
					});

					setDonators(arr);
				})
				.catch((_err) => {
					return;
				});
		})();
	}, [apiLocation]);

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
			}}
		>
			<Heading
				m="20px"
				fontFamily="SF Mono"
				fontSize={isMobile ? '3xl' : '5xl'}
				color="white"
			>
				Hall of Donators
			</Heading>
			{/* <HStack>
				<Image boxSize="150px" src="/monke.svg" />
				<QRCode
					size={128}
					value="ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"
				/>
			</HStack> */}
			<Button
				mr="-8px"
				colorScheme="blue"
				variant="solid"
				onClick={onCopy}
				fontSize="lg"
				m="10px"
				mt="1px"
			>
				Donate
			</Button>

			{!isMobile && <DonationPedestal donators={donators} />}

			{!isMobile ? (
				<SimpleBar
					style={{
						maxWidth: isMobile ? '100vw' : '40vw',
						minWidth: isMobile ? '100vw' : '40vw',
						minHeight: '38vh',
						maxHeight: '38vh',
						overflowX: 'hidden',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Table
						m="15px"
						size={isMobile ? 'sm' : 'md'}
						variant="simple"
						colorScheme="linkedin"
					>
						<Thead>
							<Tr>
								<Th>Address</Th>
								<Th isNumeric>Amount</Th>
							</Tr>
						</Thead>
						<Tbody>
							{donators.map((donation, index) => (
								<Tr>
									<Td color={GetColor(index)}>{donation.addr}</Td>
									<Td isNumeric>{Math.round(donation.amount * 100) / 100}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</SimpleBar>
			) : (
				<VStack maxHeight="75vh" minHeight="75vh" overflowY="scroll" mb="5px">
					{donators.map((donation, index) => (
						<DonationEntry
							address={donation.addr}
							amount={donation.amount}
							ind={index}
						/>
					))}
				</VStack>
			)}
		</div>
	);
};

export default DonatePage;
