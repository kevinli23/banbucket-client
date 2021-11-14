import React from 'react';
import { Link, IconButton } from '@chakra-ui/react';

interface IconRowLinkProps {
	key: string;
	link: string;
	arialabel: string;
	bgColor: string;
	icon: JSX.Element;
}

const IconRowLink = ({
	key,
	link,
	arialabel,
	bgColor,
	icon,
}: IconRowLinkProps) => {
	return (
		<Link key={key} href={link} isExternal>
			<IconButton
				backgroundColor={bgColor}
				aria-label={arialabel}
				isRound={true}
				icon={icon}
				m="5px"
				_hover={{
					backgroundColor: '#E4C703',
				}}
			/>
		</Link>
	);
};

export default IconRowLink;
