import React from 'react';
import Index from '../src/components/Index';
import { shallow } from 'enzyme';

const enzymeWrapper = shallow(<Index />);

describe('Index', () => {
	it('it should render Index', () => {
		// expect(enzymeWrapper.props().className).equalTo('index');
    });
});