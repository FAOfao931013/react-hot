import rootNode from './rootNode';
import Index from 'components/Index';

const routes = {
	path: '/',
	component: rootNode,
	indexRoute: { onEnter: (nextState, replace) => replace('index') },
	childRoutes: [{
		path: 'index',
		component: Index
	}]
};

export default routes;