export interface IChain {
	symbol: Chain;
	name: string;
}

export enum Chain {
	Ethereum = 'Ethereum',
	Bitcoin = 'renBTC',
}

export const Chains = new Map<Chain, IChain>()
	.set(Chain.Ethereum, {
		symbol: Chain.Ethereum,
		name: 'Ethereum',
	})
	.set(Chain.Bitcoin, {
		symbol: Chain.Bitcoin,
		name: 'Bitcoin',
	});
