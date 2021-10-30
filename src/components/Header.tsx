import React from 'react';

import { Heading, Text } from '@chakra-ui/react';

import { ReactComponent as BanIcon } from '../banicon.svg';
import PriceBox from './PriceBox';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
	amount: number;
}

const Header = ({ amount }: HeaderProps) => {
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
