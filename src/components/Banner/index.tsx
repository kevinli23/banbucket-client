import React from 'react';

import { Link, Text, Alert, AlertIcon } from '@chakra-ui/react';

const Banner = () => {
	return (
		<Alert
			status="info"
			maxWidth="350px"
			mt="30px"
			mb="-55px"
			borderRadius="15px"
		>
			<AlertIcon />
			<Text>
				If you are looking for a quick way to swap XNO/BAN check out{' '}
				<Link
					href="https://nanswap.com/swap/XNO/BAN?ref=banbucket"
					target="_blank"
					color="#CC5500"
				>
					NanSwap
				</Link>{' '}
				and use my link to support BanBucket!
			</Text>
		</Alert>
	);
};

export default Banner;
