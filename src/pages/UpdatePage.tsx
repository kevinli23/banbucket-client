import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import MarkdownContainer from '../components/MarkdownContainer';

import { Heading, Tag } from '@chakra-ui/react';

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
							props: {
								textDecoration: 'underline',
								mb: '10px',
							},
						},
						h2: {
							component: Tag,
						},
					},
					wrapper: MarkdownContainer,
				}}
			>
				{updates}
			</Markdown>
		</div>
	);
};

export default UpdatePage;
