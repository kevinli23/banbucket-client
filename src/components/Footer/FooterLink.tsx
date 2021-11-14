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

export default FooterLink;
