import * as React from 'react';
import { strings } from '../i18n';
import { Chain, Chains } from '../ren/chains';
import { AddressField, AmountField } from './fields';
import StyledSubmitButton from './styles/styledButtons';

const BurnForm = () => {
	return (
		<div className="panel">
			<AddressField chain={Chains.get(Chain.Bitcoin)} />
			<AmountField />
			<div className="button_wrapper">
				<StyledSubmitButton variant="contained" fullWidth>
					{strings('burn.button')}
				</StyledSubmitButton>
			</div>
		</div>
	);
};

export default BurnForm;
