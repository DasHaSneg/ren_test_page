import { Bitcoin, Ethereum } from '@renproject/chains';
import { getRenNetworkDetails, LockChain, MintChain } from '@renproject/interfaces';
import RenJS from '@renproject/ren';
import BigNumber from 'bignumber.js';
import { IChain } from './chains';

export default class Minter {
	mintChain: IChain;

	mintChainProvider: any;

	asset: string;

	renJS: RenJS;

	recipientAddress?: string;

	amount?: string;

	fromChain: LockChain;

	toChain: MintChain;

	constructor(attributes: Omit<Minter, 'fromChain' | 'toChain'>) {
		const { mintChain, mintChainProvider, asset, renJS } = attributes;
		// type Keys = keyof typeof attributes;
		// type values = typeof attributes[Keys];
		// Object.keys(attributes).forEach(key => {
		// 	(this as values)[key] = (attributes as values)[key];
		// });
		// TODO make the code shorter
		this.mintChain = mintChain;
		this.mintChainProvider = mintChainProvider;
		this.asset = asset;
		this.renJS = renJS;
		if (attributes.recipientAddress) this.recipientAddress = attributes.recipientAddress;
		if (attributes.amount) this.amount = attributes.amount;
		this.fromChain = Bitcoin();
		this.toChain = this.getChainObject();
	}

	private getChainObject = () => {
		const network = getRenNetworkDetails('testnet');
		let eth = Ethereum(this.mintChainProvider, network);
		eth = this.recipientAddress
			? eth.Account({
					address: this.recipientAddress,
					value: this.amount,
			  })
			: eth;
		return eth as MintChain;
	};

	getFees = async () => {
		const { asset, fromChain, toChain } = this;
		const fees = await this.renJS.getFees({
			asset,
			from: fromChain,
			to: toChain,
		});
		return fees;
	};

	getMinimumAmount = async () => {
		const decimals = await this.fromChain.assetDecimals(this.asset);
		return new BigNumber((this.getFees() as any).mint).dividedBy(new BigNumber(10).exponentiatedBy(decimals)).toFixed();
	};

	startMint = async () => {
		const { asset, fromChain, toChain } = this;
		const lockAndMint = await this.renJS.lockAndMint({
			asset,
			from: fromChain,
			to: toChain,
		});
		if (lockAndMint.gatewayAddress) {
			return { lockAndMintObject: lockAndMint, gatewayAddress: lockAndMint.gatewayAddress };
		}
		throw new Error(`No GatewayAddress`);
	};

	// setDepositListener = (lockAndMintObject: any) => {
	// 	lockAndMint.on('deposit', async deposit => {
	// 		const txHash = await deposit.txHash();
	// 		onDeposit(txHash, (deposit as unknown) as LockAndMintDeposit);
	// 	});
	// };
}
