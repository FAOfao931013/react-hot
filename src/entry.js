import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	hashHistory,
	browserHistory,
} from 'react-router';
import routes from '../src/routes';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

ReactDOM.render(
    <Router
        history={history}
        routes={routes} />,
    document.getElementById('root')
);