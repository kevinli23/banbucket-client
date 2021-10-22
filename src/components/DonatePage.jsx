import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import {
	Text,
	Heading,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from '@chakra-ui/react';

const DonatePage = () => {
	const [donators, setDonators] = useState([{addr: "dummy addr", amount: 0}, {addr: "dummy addr2", amount: 10}]);

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

					arr.sort((donator1, donator2) => {
						if (donator1['amount'] > donator2['amount']) {
							return -1
						} else if (donator1['amount'] < donator2['amount']){
							return 1
						}
						return 0
					})

					setDonators(arr)
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
			}}
		>
			<Heading m="20px" fontFamily="Aleo, serif" size="3xl" color="white">
				Hall of Donators
			</Heading>
			<Table m="15px" maxWidth="50vw" variant="simple" colorScheme="linkedin">
				<Thead>
					<Tr>
						<Th>Address</Th>
						<Th isNumeric>Amount</Th>
					</Tr>
				</Thead>
				<Tbody>
					{donators.map((donation) => (
						<Tr>
							<Td>{donation.addr}</Td>
							<Td isNumeric>{donation.amount}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
			<QRCode
				size={128}
				value="ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"
			/>
			<Text m="10px" color="white">
				Donate: ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu
			</Text>
		</div>
	);
};

export default DonatePage;
