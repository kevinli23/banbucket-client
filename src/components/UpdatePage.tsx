import React, { useEffect, useState, ReactChildren, ReactChild } from 'react';
import Markdown from 'markdown-to-jsx';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { Heading, useMediaQuery } from '@chakra-ui/react';

interface MarkdownTextProps {
	children: ReactChild | ReactChildren;
}

const MarkdownText = ({ children }: MarkdownTextProps) => {
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
				// border: '1px solid #696969',
				borderRadius: '15px',
				marginTop: '10px',
			}}
		>
			{children}
		</SimpleBar>
	);
};

const UpdatePage = () => {
	const [updates, setUpdates] = useState('');

	useEffect(() => {
		fetch('/CHANGELOG.MD')
			.then((res) => res.text())
			.then((text) => {
				setUpdates(text);
			});
	}, []);

	return (
		<div
			className="App"
			style={{
				minWidth: '100vw',
				minHeight: '95vh',
				maxHeight: '95vh',
				maxWidth: '100vw',
				backgroundColor: '#212529',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				color: 'white',
			}}
		>
			<Heading mt="20px" color="#E4C703" fontFamily="Aleo, serif" size="3xl">
				Update Logs
			</Heading>
			<Markdown
				options={{
					overrides: {
						h1: {
							component: Heading,
						},
					},
					wrapper: MarkdownText,
				}}
			>
				{updates}
			</Markdown>
		</div>
	);
};

export default UpdatePage;
