import React from 'react';

import classes from './NumericalInput.css';

const numericalInput = (props) => {
    return (
        <div className={classes.NumericalInput}>
            <input type="text" value={props.eq} onChange={props.changed}/>
            <button onClick={props.clicked}>Go</button>
        </div>
    );
};
export default numericalInput;