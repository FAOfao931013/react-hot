import React from 'react';
import index from 'decorator/index';
import './style.less';

@index('my first decorator')
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