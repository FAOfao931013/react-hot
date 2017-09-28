import React from 'react';
import test from 'decorator/test';
import './style.less';

@test('my first decorator')
class Index extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='index'>
                index
            </div>
        );
    }
}

export default Index;