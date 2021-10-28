import React, { useEffect } from 'react';

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	HStack,
	Button,
	Text,
	useClipboard,
	useToast,
} from '@chakra-ui/react';

import QRCode from 'react-qr-code';

interface DonationModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const DonationModal = ({ isOpen, onClose }: DonationModalProps) => {
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

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent
				maxW="300px"
				display="flex"
				flexDir="column"
				alignItems="center"
			>
				<ModalHeader>Donate to BanBucket</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<QRCode
						size={256}
						value="ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"
					/>
					<HStack mt="10px">
						<Button
							mr="-8px"
							color="black"
							_hover={{ backgroundColor: '#878787' }}
							variant="ghost"
							onClick={onCopy}
							fontSize="md"
							maxW="250px"
							minH="100px"
							overflowWrap="break-word"
							whiteSpace="normal"
							display="inline"
						>
							<Text color="#E4C703">ban_</Text>
							1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu
						</Button>
					</HStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default DonationModal;
