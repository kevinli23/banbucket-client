import React from 'react';

import { Link as RouteLink, useLocation } from 'react-router-dom';
import { Text, Link } from '@chakra-ui/react';

interface FooterLinkProps {
	route: string;
	text: string;
}

const FooterLink = ({ route, text }: FooterLinkProps) => {
	let location = useLocation();
	return (
		<Link
			to={route}
			as={RouteLink}
			_hover={{
				textDecoration: 'none',
				color: '#E4C703',
			}}
			_link={{
				textDecoration: 'none',
			}}
			_active={{
				textDecoration: 'none',
			}}
			_visited={{
				textDecoration: 'none',
			}}
			_focus={{
				textDecoration: 'none',
			}}
			color={location.pathname !== route ? 'white' : 'blue.200'}
		>
			<Text>{text}</Text>
		</Link>
	);
};

const FooterDot = () => {
	return (
		<div
			style={{
				marginLeft: '5px',
				marginRight: '5px',
				color: 'white',
			}}
		>
			·
		</div>
	);
};

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
				boxShadow:
					'0px 10px 13px -7px #000000, 0px -5px 12px 2px rgba(18,20,23,0.59)',
			}}
		>
			<FooterLink route="/" text="Faucet" />
			<FooterDot />
			<FooterLink route="/donate" text="Donate" />
			<FooterDot />
			<FooterLink route="/updates" text="Updates" />
			<FooterDot />
			<Link
				href="https://www.yellowspyglass.com/account/ban_1j3rqseffoin7x5z5y1ehaqe1n7todza41kdf4oyga8phps3ea31u39ruchu"
				_hover={{
					textDecoration: 'none',
					color: '#E4C703',
				}}
				_link={{
					textDecoration: 'none',
				}}
				_focus={{
					textDecoration: 'none',
				}}
				isExternal
				color="white"
			>
				<Text>SpyGlass</Text>
			</Link>
		</div>
	);
};

export default Footer;
