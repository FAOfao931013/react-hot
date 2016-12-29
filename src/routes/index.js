import React from 'react';
import {
	Route,
	IndexRedirect,
} from 'react-router';
import rootNode from './rootNode';

const index  = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('components/Index').default);
  }, 'index');
};

const routes = (
	<Route path='/' component={rootNode}>
		<IndexRedirect to='index' />
		<Route path='index' getComponent={index} />
	</Route>
);

export default routes;