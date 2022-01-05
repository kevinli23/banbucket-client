import React from 'react';

import { Box, Text } from '@chakra-ui/react';

interface DonationEntryProps {
	address: string;
	amount: number;
	ind: number;
}

const GetColor = (index: number) => {
	if (index === 0) {
		return '#FFD700';
	} else if (index === 1) {
		return '#D8D8D8';
	} else if (index === 2) {
		return '#b08d57';
	}

	return '#ADD8E6';
};

const DonationEntry = ({ address, amount, ind }: DonationEntryProps) => {
	return (
		<>
			<Box mt="10px" />
			<Box
				maxWidth="80vw"
				minWidth="80vw"
				backgroundColor={GetColor(ind)}
				borderRadius="15px"
				padding="15px"
				m="10px"
			>
				<Text color="black">{address}</Text>
				<Text
					color="black"
					textAlign="center"
					fontFamily="SF Mono"
					fontSize="2xl"
					mt="5px"
				>
					{amount}
				</Text>
			</Box>
		</>
	);
};

export default DonationEntry;
