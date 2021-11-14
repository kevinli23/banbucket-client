import React, { ReactChildren, ReactChild } from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { useMediaQuery } from '@chakra-ui/react';

interface MarkdownTextProps {
	children: ReactChild | ReactChildren;
}

const MarkdownContainer = ({ children }: MarkdownTextProps) => {
	const [isMobile] = useMediaQuery('(max-width: 1024px)');

	return (
		<SimpleBar
			style={{
				maxHeight: '80vh',
				maxWidth: isMobile ? '80vw' : '30vw',
				minHeight: '80vh',
				minWidth: isMobile ? '80vw' : '30vw',
				padding: '20px',
				backgroundColor: '#212529',
				borderRadius: '15px',
				marginTop: '10px',
			}}
		>
			{children}
		</SimpleBar>
	);
};

export default MarkdownContainer;
