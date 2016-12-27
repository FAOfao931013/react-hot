import React from 'react';
import {
	Route,
	IndexRedirect,
} from 'react-router';
import rootNode from './rootNode';
// import Index from 'components/Index';

const index  = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('components/Index').default);
  }, 'index');
};

const routes = (
	<div>
		<Route path='/' component={rootNode}>
			<IndexRedirect to='index' />
			<Route path='index' getComponent={index} />
		</Route>
	</div>
);

export default routes;