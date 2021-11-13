import React, { ReactChildren, ReactChild } from 'react';

interface PageBodyProps {
	children: Array<ReactChild | ReactChildren>;
}

const PageBody = ({ children }: PageBodyProps) => {
	return (
		<div
			className="App"
			style={{
				minWidth: '100vw',
				minHeight: '95vh',
				backgroundColor: '#212529',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{children}
		</div>
	);
};

export default PageBody;
