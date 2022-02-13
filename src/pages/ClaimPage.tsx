import React from 'react';
import ClaimBox from '../components/ClaimBox';

import { Text, useDisclosure, Button, Box } from '@chakra-ui/react';

import DonationModal from '../components/DonationModal';

import Banner from '../components/Banner';

const ClaimPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			minW="100vw"
			minH="95vh"
			backgroundColor="#212529"
			d="flex"
			flexDir="column"
			alignItems="center"
			justifyContent="center"
		>
			{/* <Banner /> */}
			<ClaimBox />
			<Box
				justifySelf="flex-end"
				d="flex"
				mt="auto"
				mb="10px"
				alignItems="center"
				flexDir="column"
			>
				{/* <Button colorScheme="blue" mb="10px" fontSize="xl" onClick={onOpen}>
					Donate to BanBucket
				</Button> */}
				<Text color="white" fontSize="xs">
					This site is protected by{' '}
					<span style={{ color: '#00A7BF' }}>hCaptcha</span> and its
					<Text>
						<a
							style={{ color: '#80DAE0', textDecoration: 'underline' }}
							href="https://hcaptcha.com/privacy"
							target="_blank"
							rel="noreferrer"
						>
							Privacy Policy
						</a>{' '}
						and{' '}
						<a
							style={{ color: '#80DAE0', textDecoration: 'underline' }}
							href="https://hcaptcha.com/terms"
							target="_blank"
							rel="noreferrer"
						>
							Terms of Service
						</a>{' '}
						apply.
					</Text>
				</Text>
			</Box>
			<DonationModal isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default ClaimPage;
