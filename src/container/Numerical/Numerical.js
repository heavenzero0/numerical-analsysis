import React, {Component} from 'react';


import NumericalGraph from '../../component/Numerical/NumericalGraph/NumericalGraph';
import Header from '../../component/UI/Header/Header';
import NumericalInput from '../../component/Numerical/NumericalInput/NumericalInput';
import NumericalTable from '../../component/Numerical/NumericalTable/NumericalTable';
import {numericalFunction} from "../../services/Numerical/NumericalFunction";
import classes from './Numerical.css';


import {regulaFalsi} from "../../services/Numerical/RegulaFalsi";

class Numerical extends Component {

    state = {
        eq: '',
        output: [],
        value: 'x'
    };


    equationChangedHandler = (event) => {
        const value = event.target.value;
        this.setState({eq: value});
    };

    solveHandler = () => {
        const results = regulaFalsi(this.state.eq);
        const eq = this.state.eq;
        this.setState({output: results, value: eq});
    };

    render() {


        return (
            <div className={classes.Numerical}>
                <Header/>
                <div className={classes.NumericalIT}>
                    <NumericalInput
                        changed={this.equationChangedHandler}
                        clicked={this.solveHandler}
                        eq={this.state.eq}
                    />
                    <NumericalTable eq={this.state.output}/>
                </div>
                <NumericalGraph equation={this.state.value}/>
            </div>
        );
    }
}

export default Numerical;