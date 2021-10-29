import React, { useState, useEffect } from 'react';

import {
	Text,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	Link,
} from '@chakra-ui/react';

const PriceBox = () => {
	const [price, setPrice] = useState('0');
	const [change, setChange] = useState('0');

	const apiLocation = 'https://banbucket.herokuapp.com';

	useEffect(() => {
		(async () => {
			await fetch(`${apiLocation}/api/v1/price`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					setPrice(json.price);
					setChange(json.change);
				})
				.catch((_err) => {
					return;
				});
		})();
	}, [price, change, apiLocation]);

	return (
		<Stat
			color="white"
			backgroundColor="#1e1f26"
			boxShadow="0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"
			padding="10px"
			borderRadius="15px"
		>
			<StatLabel display="flex" flexDirection="row">
				<Text color="#E4C703" mr="5px">
					BAN
				</Text>
				(from
				<Link
					href="https://www.coingecko.com/en/coins/banano"
					ml="5px"
					_hover={{
						textDecoration: 'none',
						color: 'rgb(249, 233, 136)',
					}}
					_link={{
						textDecoration: 'none',
					}}
					_focus={{
						textDecoration: 'none',
					}}
					isExternal
					color="rgb(140, 198, 63)"
				>
					CoinGecko
				</Link>
				)
			</StatLabel>
			<StatNumber color="#E4C703">${price} USD</StatNumber>
			<StatHelpText color={change.charAt(0) === '-' ? 'red.400' : 'green.400'}>
				<StatArrow type={change.charAt(0) === '-' ? 'decrease' : 'increase'} />
				{change}% (24h)
			</StatHelpText>
		</Stat>
	);
};

export default PriceBox;
