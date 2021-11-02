import * as React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { IChain, Chain } from '../ren/chains';
import { strings } from '../i18n';

interface AddressFieldProps {
	chain: IChain | undefined;
}

export const AddressField = (props: AddressFieldProps) => {
	const { chain } = props;

	const [address, setAddress] = useState('');
	const [error, setError] = useState(false);

	return (
		<div className="input_wrapper">
			<TextField
				id="outlined-basic"
				label=""
				variant="outlined"
				placeholder={strings(`${chain?.name && chain.name === Chain.Ethereum ? 'mint' : 'burn'}.recipient_address_hint`)}
				error={error}
				helperText={error ? strings('address_error') : ''}
			/>
		</div>
	);
};

const NUMBER_REGEX = /^\d*\.?\d*$/;
const isNum = (val: string) => Boolean(NUMBER_REGEX.exec(val));

export const AmountField = () => {
	const [amount, setAmount] = useState(0);
	const [error, setError] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const num = event.target.value as unknown as number;
		if (!isNum(event.target.value) || num < 0) return;
		setAmount(num);
	};

	return (
		<div className="input_wrapper">
			<TextField
				id="outlined-basic"
				label=""
				variant="outlined"
				placeholder={strings('burn.amount_hint')}
				error={error}
				helperText={error ? strings('burn.amount_error') : ''}
				type="text"
				inputMode="numeric"
				onChange={handleChange}
				value={amount}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<div>renBTC</div>
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};
