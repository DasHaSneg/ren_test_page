import React from 'react';
import ReactDOM from 'react-dom';
import './ui/styles/index.scss';
import {Main} from './ui/main';
import './i18n';

const render = (Main: () => JSX.Element) => {
    ReactDOM.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render(Main);

if ((module as any).hot) {
    (module as any).hot.accept("./ui/main", () => {
        render(require("./ui/main").Main);
    })
}
