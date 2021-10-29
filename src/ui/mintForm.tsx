import * as React from 'react';
import { Button, TextField } from '@mui/material';
import { strings } from '../i18n';

const MintForm = () => {
	return (
		<div className="panel">
			<div className="input_wrapper">
				<TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder={strings('mint.recipient_address_hint')} />
			</div>
			<div className="button_wrapper">
				<Button variant="contained" fullWidth>
					{strings('mint.button')}
				</Button>
			</div>
		</div>
	);
};
export default MintForm;
