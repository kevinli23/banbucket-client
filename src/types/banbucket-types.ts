export type StatsTypes = {
	total_claims: number;
	today_claims: number;
	yesterday_claims: number;
	unique_claims: number;
	daily_claims: {
		[key: string]: number;
	};
	last_updated: number;
};

export interface StatItemProps {
	title: string;
	value: number;
	type: 'increase' | 'decrease';
	percent: any;
}

export interface TransactionProps {
	hash: string;
	address: string;
	date: string;
	amount: number;
	type: string;
}