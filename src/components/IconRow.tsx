import React from 'react';

import { IconButton, Link } from '@chakra-ui/react';

import {
	faReddit,
	faDiscord,
	faTelegram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as BanIcon } from '../banicon.svg';

const IconRow = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				marginTop: '16vh',
			}}
		>
			<Link href="https://www.reddit.com/r/banano/" isExternal>
				<IconButton
					backgroundColor="white"
					aria-label="reddit"
					isRound={true}
					icon={<FontAwesomeIcon color="#FF5700" icon={faReddit} size="2x" />}
					m="5px"
					_hover={{
						backgroundColor: '#E4C703',
					}}
				/>
			</Link>
			<Link href="https://chat.banano.cc/" isExternal>
				<IconButton
					aria-label="discord"
					backgroundColor="#5C6BC0"
					isRound={true}
					icon={<FontAwesomeIcon color="white" icon={faDiscord} size="lg" />}
					m="5px"
					_hover={{
						backgroundColor: '#E4C703',
					}}
				/>
			</Link>
			<Link href="https://t.me/banano_official" isExternal>
				<IconButton
					backgroundColor="white"
					aria-label="telegram"
					isRound={true}
					icon={<FontAwesomeIcon color="#32A8DD" icon={faTelegram} size="2x" />}
					m="5px"
					_hover={{
						backgroundColor: '#E4C703',
					}}
				/>
			</Link>
			<Link href="https://twitter.com/bananocoin" isExternal>
				<IconButton
					backgroundColor="white"
					aria-label="twitter"
					isRound={true}
					icon={<FontAwesomeIcon color="#1DA1F2" icon={faTwitter} size="2x" />}
					m="5px"
					_hover={{
						backgroundColor: '#E4C703',
					}}
				/>
			</Link>
			<Link href="https://banano.cc/" isExternal>
				<IconButton
					backgroundColor="white"
					aria-label="banano"
					isRound={true}
					icon={<BanIcon style={{ width: '35px', height: '35px' }} />}
					m="5px"
					_hover={{
						backgroundColor: '#E4C703',
					}}
				/>
			</Link>
		</div>
	);
};

export default IconRow;
