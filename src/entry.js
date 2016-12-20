import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	hashHistory,
	browserHistory,
} from 'react-router';
import routes from '../src/routes';

ReactDOM.render(
    <Router
        history={browserHistory}
        routes={routes} />,
    document.getElementById('root')
);