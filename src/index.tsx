import React from 'react';
import ReactDOM from 'react-dom';
import './ui/styles/index.scss';
import Main from './ui/main';
import './i18n';

const render = (Main: () => JSX.Element) => {
	ReactDOM.render(
		<React.StrictMode>
			<Main />
		</React.StrictMode>,
		document.getElementById('root')
	);
};

render(Main);
// tslint:disable-next-line: no-any
if ((module as any).hot) {
	// tslint:disable-next-line: no-any
	(module as any).hot.accept('./ui/main', () => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
		render(require('./ui/main').Main);
	});
}
