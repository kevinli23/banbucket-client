import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

import { Heading } from '@chakra-ui/react';

const UpdatePage = () => {
	const [updates, setUpdates] = useState('');

	useEffect(() => {
		fetch('/CHANGELOG.MD')
			.then((res) => res.text())
			.then((text) => {
				setUpdates(text);
			});
	});

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
			<div
				style={{
					display: 'flex',
					minWidth: '25vw',
					margin: '20px',
					justifyContent: 'flex-start',
				}}
			>
				<Markdown
					options={{
						overrides: {
							h1: {
								component: Heading,
							},
						},
					}}
				>
					{updates}
				</Markdown>
			</div>
		</div>
	);
};

export default UpdatePage;
