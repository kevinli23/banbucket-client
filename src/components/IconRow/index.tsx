import React from 'react';

import { HStack } from '@chakra-ui/react';

import {
	faReddit,
	faDiscord,
	faTelegram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as BanIcon } from '../banicon.svg';

import IconRowLink from './IconRowLink';

const icons = [
	{
		link: 'https://www.reddit.com/r/banano/',
		arialabel: 'reddit',
		bgColor: 'white',
		icon: <FontAwesomeIcon color="#FF5700" icon={faReddit} size="2x" />,
	},
	{
		link: 'https://chat.banano.cc/',
		arialabel: 'discord',
		bgColor: '#5C6BC0',
		icon: <FontAwesomeIcon color="white" icon={faDiscord} size="lg" />,
	},
	{
		link: 'https://t.me/banano_official',
		arialabel: 'telegram',
		bgColor: 'white',
		icon: <FontAwesomeIcon color="#32A8DD" icon={faTelegram} size="2x" />,
	},
	{
		link: 'https://twitter.com/bananocoin',
		arialabel: 'twitter',
		bgColor: 'white',
		icon: <FontAwesomeIcon color="#1DA1F2" icon={faTwitter} size="2x" />,
	},
	{
		link: 'https://banano.cc/',
		arialabel: 'banano',
		bgColor: 'white',
		icon: <BanIcon style={{ width: '35px', height: '35px' }} />,
	},
];

const IconRow = () => {
	return (
		<HStack mt="16vh" justifyContent="center">
			{icons.map((icon) => {
				return <IconRowLink key={icon.arialabel} {...icon} />;
			})}
		</HStack>
	);
};

export default IconRow;
