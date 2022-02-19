import React from 'react';

import FooterLink from './FooterLink';
import FooterDot from './FooterDot';

const Footer = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				minWidth: '100vw',
				maxHeight: '5vh',
				minHeight: '5vh',
				backgroundColor: '#212529',
				fontFamily: 'Roboto, sans-serif',
				boxShadow:
					'0px 10px 13px -7px #000000, 0px -5px 12px 2px rgba(18,20,23,0.59)',
			}}
		>
			<FooterLink route="/" text="Faucet" />
			<FooterDot />
			<FooterLink route="/transactions" text="Transactions" />
			<FooterDot />
			{/* <FooterLink route="/donate" text="Donate" />
			<FooterDot />
			<FooterLink route="/updates" text="Updates" />
			<FooterDot /> */}
			<FooterLink route="/stats" text="Stats" />
		</div>
	);
};

export default Footer;
