import React, { useState, useEffect } from 'react';

import {
	Heading,
	Text,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Box,
	useMediaQuery,
} from '@chakra-ui/react';

import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';

import { StatItemProps, StatsTypes } from '../types/banbucket-types';

const defaultStats = {
	total_claims: 5173,
	today_claims: 500,
	yesterday_claims: 123,
	unique_claims: 1731,
	daily_claims: {
		'2021-10-20': 8,
		'2021-10-21': 52,
		'2021-10-22': 87,
		'2021-10-23': 175,
		'2021-10-24': 252,
		'2021-10-25': 179,
		'2021-10-26': 175,
		'2021-10-27': 161,
		'2021-10-28': 165,
		'2021-10-29': 266,
		'2021-10-30': 295,
		'2021-10-31': 238,
		'2021-11-01': 217,
		'2021-11-02': 296,
		'2021-11-03': 343,
		'2021-11-04': 294,
		'2021-11-05': 276,
		'2021-11-06': 306,
		'2021-11-07': 154,
		'2021-11-08': 283,
		'2021-11-09': 270,
		'2021-11-10': 247,
		'2021-11-11': 123,
		'2021-11-12': 500,
	},
	last_updated: 1636762176,
};

const StatWrapper = ({ title, value, type, percent }: StatItemProps) => {
	return (
		<Stat
			color="white"
			backgroundColor="#1e1f26"
			boxShadow="0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)"
			padding="10px"
			pb="5px"
			borderRadius="15px"
			maxW="150px"
			fontFamily="SF Mono"
		>
			<StatLabel>{title}</StatLabel>
			<StatNumber color="#e4c703">{value}</StatNumber>
			<StatHelpText fontSize="12px">
				<StatArrow type={type} />
				{percent}% (24h)
			</StatHelpText>
		</Stat>
	);
};

const StatsPage = () => {
	const [stats, setStats] = useState<StatsTypes>(defaultStats);
	const [lastUpdated, setLastUpdated] = useState('');
	const [yesterdayDailyAverage, setYesterdayDailyAverage] = useState(0);
	const [todayDailyAverage, setTodayDailyAverage] = useState(0);
	const [graphData, setGraphData] = useState<
		Array<{ name: string; claims: number }>
	>([]);

	const [isMobile] = useMediaQuery('(max-width: 700px)');

	useEffect(() => {
		(async () => {
			await fetch(`https://banbucket.herokuapp.com/api/v1/stats`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(async (res) => {
					const json = await res.json();
					setStats(json);
				})
				.catch((_err) => {
					setStats(defaultStats);
					return;
				});
		})();
	}, []);

	useEffect(() => {
		setLastUpdated(
			new Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			}).format(stats.last_updated * 1000)
		);

		if (stats.daily_claims) {
			setTodayDailyAverage(
				Math.round(
					(stats.total_claims * 1000) / Object.keys(stats.daily_claims).length
				) / 1000
			);

			setYesterdayDailyAverage(
				Math.round(
					((stats.total_claims - stats.today_claims) * 1000) /
						(Object.keys(stats.daily_claims).length - 1)
				) / 1000
			);

			var graphEntries = [];

			for (const [date, amount] of Object.entries(stats.daily_claims)) {
				const d = new Date(date);
				graphEntries.push({
					name: `${
						d.getUTCMonth() + 1
					}/${d.getUTCDate()}/${d.getUTCFullYear().toString().substring(2)}`,
					claims: amount,
				});
			}

			setGraphData(graphEntries);
		}
	}, [stats]);

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
			<Heading size="2xl" color="#e4c703" mt="5vh" fontFamily="SF Mono">
				BanBucket Stats
			</Heading>
			<Text fontFamily="SF Mono">
				Last Updated: <span style={{ color: '#80DAE0' }}>{lastUpdated}</span>
			</Text>
			<Box m="20px" d="flex" flexDir="column" minW="100vw" alignItems="center">
				<StatGroup minW="350px" maxW="350px">
					<StatWrapper
						title="Total Claims"
						value={stats.total_claims}
						type="increase"
						percent={
							Math.round(
								(stats.today_claims * 100000) /
									(stats.total_claims - stats.today_claims)
							) / 1000
						}
					/>

					<StatWrapper
						title="Claims Today"
						value={stats.today_claims}
						type={
							stats.today_claims >= stats.yesterday_claims ? 'increase' : 'decrease'
						}
						percent={Math.abs(
							Math.round(
								((stats.today_claims - stats.yesterday_claims) * 100000) /
									stats.yesterday_claims
							) / 1000
						)}
					/>
				</StatGroup>
			</Box>
			<Box>
				<StatGroup minW="350px" maxW="350px">
					<StatWrapper
						title="Unique Claims"
						value={stats.unique_claims}
						type="increase"
						percent={'-'}
					/>

					<StatWrapper
						title="Daily Average"
						value={todayDailyAverage}
						type={
							todayDailyAverage >= yesterdayDailyAverage ? 'increase' : 'decrease'
						}
						percent={Math.abs(
							Math.round(
								((todayDailyAverage - yesterdayDailyAverage) * 100000) /
									yesterdayDailyAverage
							) / 1000
						)}
					/>
				</StatGroup>
			</Box>
			<Box
				mt="40px"
				ml="-30px"
				color="black"
				d="flex"
				flexDir="column"
				alignItems="center"
			>
				<LineChart
					width={isMobile ? 350 : 660}
					height={isMobile ? 200 : 400}
					data={graphData}
				>
					<Line type="monotone" dataKey="claims" />
					<CartesianGrid stroke="white" />
					<XAxis
						fontFamily="SF Mono"
						fontSize="13px"
						dataKey="name"
						stroke="white"
					/>
					<YAxis fontFamily="SF Mono" stroke="white" />
					<Tooltip contentStyle={{ color: 'black' }} />
				</LineChart>
			</Box>
		</div>
	);
};

export default StatsPage;
