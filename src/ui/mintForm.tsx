import * as React from 'react';
import { Chain, Chains } from '../ren/chains';
import { strings } from '../i18n';
import { AddressField } from './fields';
import StyledSubmitButton from './styles/styledButtons';

const MintForm = () => {
	return (
		<div className="panel">
			<AddressField chain={Chains.get(Chain.Ethereum)} />
			<div className="button_wrapper">
				<StyledSubmitButton variant="contained" fullWidth>
					{strings('mint.button')}
				</StyledSubmitButton>
			</div>
		</div>
	);
};
export default MintForm;
