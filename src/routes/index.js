import React from 'react';
import {
	Route,
	IndexRedirect,
} from 'react-router';
import rootNode from './rootNode';
import Index from 'components/Index';

const routes = (
	<div>
		<Route path='/' component={rootNode}>
			<IndexRedirect to='index' />
			<Route path='index' component={Index} />
		</Route>
	</div>
);

export default routes;