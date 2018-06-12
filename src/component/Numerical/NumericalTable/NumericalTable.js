import React from 'react';

import classes from './NumericalTable.css';

const numericalTable = (props) => {


    const values = props.eq.map((value,index) => {
        return (
            <tr key={index}>
                <td>{value.x0}</td>
                <td>{value.x1}</td>
                <td>{value.Ae}</td>
            </tr>
        )
    });
    return (
        <div className={classes.NumericalTable}>
            <table>
                <tbody>
                <tr>
                    <th>Xl</th>
                    <th>Xu</th>
                    <th>Ea</th>
                </tr>
                {values}
                </tbody>

            </table>
        </div>
    )
};
export default numericalTable;