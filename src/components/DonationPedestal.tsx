import React from 'react';

import { Text } from '@chakra-ui/react';

interface DonationPedestalProps {
	donators: Array<{ addr: string; amount: number }>;
}

interface DonationBoxProps {
	donator: { addr: string; amount: number };
	ind: number;
}

const GetColor = (index: number) => {
	if (index === 0) {
		return '#FFD700';
	} else if (index === 1) {
		return '#d8d8d8';
	} else if (index === 2) {
		return '#b08d57';
	}

	return 'white';
};

const DonationBox = ({ donator, ind }: DonationBoxProps) => {
	return (
		<div
			style={{
				backgroundColor: '#1e1f26',
				minWidth: ind === 0 ? '220px' : '170px',
				maxWidth: '100px',
				marginLeft: '15px',
				marginRight: '15px',
				minHeight: ind === 0 ? '200px' : '170px',
				maxHeight: ind === 0 ? '200px' : '170px',
				marginBottom: ind === 0 ? '20px' : ind === 1 ? '-10px' : '-30px',
				borderRadius: '15px',
				display: 'inline',
				wordWrap: 'break-word',
				padding: '10px',
				boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
			}}
		>
			<Text color={GetColor(ind)}>{donator.addr}</Text>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 'auto',
				}}
			>
				<Text color={GetColor(ind)} fontSize={ind === 0 ? '6xl' : '4xl'}>
					{donator.amount}
				</Text>
			</div>
		</div>
	);
};

const DonationPedestal = ({ donators }: DonationPedestalProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				marginTop: '10px',
				marginBottom: '10px',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-end',
				}}
			>
				<DonationBox donator={donators[1]} ind={1} />
				<DonationBox donator={donators[0]} ind={0} />
				<DonationBox donator={donators[2]} ind={2} />
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-end',
				}}
			>
				<div
					style={{
						backgroundColor: '#A6B9C7',
						minWidth: '200px',
						minHeight: '90px',
						maxHeight: '90px',
						color: 'black',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderRight: '10px solid #899CAA',
						borderTopLeftRadius: '10px',
					}}
				>
					<Text color="white" fontFamily="Open Sans, sans-serif" fontSize="6xl">
						2
					</Text>
				</div>

				<div
					style={{
						backgroundColor: '#A6B9C7',
						minWidth: '250px',
						minHeight: '125px',
						maxHeight: '125px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderTopLeftRadius: '10px',
						borderTopRightRadius: '10px',
					}}
				>
					<Text color="white" fontFamily="Open Sans, sans-serif" fontSize="6xl">
						1
					</Text>
				</div>

				<div
					style={{
						backgroundColor: '#A6B9C7',
						minWidth: '200px',
						minHeight: '75px',
						maxHeight: '75px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						borderLeft: '10px solid #899CAA',
						borderTopRightRadius: '10px',
					}}
				>
					<Text color="white" fontFamily="Open Sans, sans-serif" fontSize="6xl">
						3
					</Text>
				</div>
			</div>
		</div>
	);
};

export default DonationPedestal;
