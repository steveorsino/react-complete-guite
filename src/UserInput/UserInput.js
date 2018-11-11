import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" value={props.name} onChange={props.change}/>
        </div>
    )
}

export default userInput;