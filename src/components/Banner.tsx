import React from 'react';

import { InfoOutlineIcon } from '@chakra-ui/icons';

import { Link, Button } from '@chakra-ui/react';

const Banner = () => {
	return (
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
			<Button
				mb="2vh"
				fontSize="lg"
				mt="20px"
				pt="5px"
				colorScheme="teal"
				fontFamily="Aleo, sans-serif"
				maxWidth="300px"
				leftIcon={<InfoOutlineIcon pb="2px" />}
			>
				Change your REP to earn more
			</Button>
		</Link>
	);
};

export default Banner;
