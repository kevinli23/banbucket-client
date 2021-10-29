import React from 'react';

import { Link, Heading, Button, Text } from '@chakra-ui/react';

import { ReactComponent as BanIcon } from '../banicon.svg';
import PriceBox from './PriceBox';

import { InfoOutlineIcon } from '@chakra-ui/icons';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
	amount: number;
}

const Header = ({ amount }: HeaderProps) => {
	return (
		<>
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
					mt="-5vh"
					mb="2vh"
					fontSize="lg"
					// padding="10px"
					paddingTop="5px"
					colorScheme="teal"
					fontFamily="Aleo, sans-serif"
					maxWidth="300px"
					leftIcon={<InfoOutlineIcon pb="2px" />}
				>
					Change your REP to earn more
				</Button>
			</Link>
			<Heading color="#E4C703" fontFamily="Aleo, serif" size="4xl">
				BanBucket
			</Heading>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					minWidth: '300px',
					maxWidth: '300px',
					marginBottom: '10px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
						minWidth: '110px',
						maxWidth: '110px',
						paddingRight: '15px',
					}}
				>
					<div
						style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
					>
						<Text color="white" fontSize="xl" m="5px">
							{amount}
						</Text>
						<BanIcon style={{ width: '20px', height: '20px' }} />
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginLeft: '12px',
						}}
					>
						<FontAwesomeIcon color="white" icon={faPaperPlane} size="1x" />
						<Text color="white" fontSize="xl" m="5px">
							0.05
						</Text>
						<BanIcon style={{ width: '20px', height: '20px' }} />
					</div>
				</div>
				<PriceBox />
			</div>
		</>
	);
};

export default Header;
