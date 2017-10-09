import React from 'react';

const test = name => Component => {
	return class PageEvents extends React.Component {
        constructor(props) {
            super(props);

        }

        componentDidMount() {
			console.log(name);
        }

        render() {
            return <Component
                ref='comp'
                {...this.props} />;
        }
    };
};

export default test;