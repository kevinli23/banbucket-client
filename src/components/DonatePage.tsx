import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
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
	HStack,
	IconButton,
	Text,
	Image,
	Link,
} from '@chakra-ui/react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { CopyIcon } from '@chakra-ui/icons';

interface Donator {
	addr: string;
	amount: number;
}

const DonatePage = () => {
	const [donators, setDonators] = useState([
		{
			addr: 'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu',
			amount: 0,
		},
	]);
	const { hasCopied, onCopy } = useClipboard(
		'ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu'
	);
	const toast = useToast();

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
			await fetch('https://banbucket.herokuapp.com/api/v1/donators', {
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
	}, []);

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
			<Heading m="20px" fontFamily="Aleo, serif" size="3xl" color="white">
				Hall of Donators
			</Heading>
			<HStack>
				<Image
					boxSize="150px"
					src="https://monkey.banano.cc/api/v1/monkey/ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu?svc=creeper"
				/>
				<QRCode
					size={128}
					value="ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"
				/>
			</HStack>
			<HStack mt="10px">
				<Button mr="-8px" colorScheme="linkedin" variant="ghost" onClick={onCopy}>
					<Text color="#E4C703">ban_</Text>
					<Text color="white">
						1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu
					</Text>
				</Button>
				<IconButton
					colorScheme="linkedin"
					aria-label="copy"
					icon={<CopyIcon />}
					onClick={onCopy}
				/>
			</HStack>

			<SimpleBar
				style={{
					maxWidth: '40vw',
					minWidth: '40vw',
					minHeight: '60vh',
					maxHeight: '60vh',
					overflowX: 'hidden',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Table m="15px" maxWidth="37vw" variant="simple" colorScheme="linkedin">
					<Thead>
						<Tr>
							<Th>Address</Th>
							<Th isNumeric>Amount</Th>
						</Tr>
					</Thead>
					<Tbody>
						{donators.map((donation) => (
							<Tr>
								<Td>
									<Link
										href={
											'https://creeper.banano.cc/explorer/account/' +
											donation.addr +
											'/history'
										}
										_hover={{
											textDecoration: 'none',
											color: '#E4C703',
										}}
										_link={{
											textDecoration: 'none',
										}}
										_focus={{
											textDecoration: 'none',
										}}
										id={donation.addr}
										isExternal
									>
										{donation.addr}
									</Link>
								</Td>
								<Td isNumeric>{donation.amount}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</SimpleBar>
		</div>
	);
};

export default DonatePage;