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
				Banbucket is seeking a sponsor. If you would like to advertise, please reach
				out on{' '}
				<Link
					href="https://www.reddit.com/user/campuspizza"
					target="_blank"
					color="#CC5500"
				>
					reddit
				</Link>{' '}
				or by{' '}
				<Link href="mailto:aiglette_carbone@aleeas.com" color="#CC5500">
					{' '}
					email
				</Link>
			</Text>
		</Alert>
	);
};

export default Banner;
