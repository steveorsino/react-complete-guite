import React from 'react';

const validationComponent = (props) => {

    return (
        <div>
            {(props.size < 5) ? 'Text too short...' : 'Text long enough'}
        </div>
    )
};


export default validationComponent;