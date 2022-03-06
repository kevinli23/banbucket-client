import React, { useState, useEffect } from 'react';

import { Heading, Text, Button, Link } from '@chakra-ui/react';

import { ReactComponent as BanIcon } from '../../banicon.svg';
import PriceBox from '../PriceBox';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
	amount: number;
}

const apiLocation = 'https://banbucket.herokuapp.com';

const Header = ({ amount }: HeaderProps) => {
	const [send, setSend] = useState(0);

	useEffect(() => {
		(async () => {
			await fetch(`${apiLocation}/api/v1/payout`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					setSend(json.message);
				})
				.catch((_err) => {
					setSend(0);
					return;
				});
		})();
	}, []);

	return (
		<>
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
							{send}
						</Text>
						<BanIcon style={{ width: '20px', height: '20px' }} />
					</div>
				</div>
				<PriceBox />
			</div>
			<Link
				href="https://nanswap.com/swap/XNO/BAN?ref=banbucket"
				target="_blank"
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Button colorScheme="blue" minWidth="300px" minHeight="50px" mb="5px">
					Feeless XNO/BAN Swap @ NanSwap
				</Button>
			</Link>
			{/* <Link
				href="https://banfaucet.com/?r=14"
				target="_blank"
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Button colorScheme="blue" minWidth="300px" minHeight="50px" mb="5px">
					Earn more Free Banano @ BanFaucet
				</Button>
			</Link> */}
		</>
	);
};

export default Header;
