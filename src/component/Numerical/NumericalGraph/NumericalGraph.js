import React, {Component} from 'react';
import d3 from 'd3';
import functionPlot from 'function-plot';

import classes from './NumericalGraph.css';

class NumericalGraph extends Component {


    componentDidMount() {
        window.d3 = d3;
        functionPlot({
            target: '#rot1',
            grid: true,
            xAxis: {
                label: 'x - axis',
                domain: [-6, 6]
            },
            yAxis: {
                label: 'y - axis',
                domain: [-6, 6]
            },
            width: 600,
            height: 500,
            data: [{
                fn: 'x'
            }]
        });
    }


    componentDidUpdate() {

        window.d3 = d3;
        functionPlot({
            target: '#rot1',
            grid: true,
            xAxis: {
                label: 'x - axis',
                domain: [-6, 6]
            },
            yAxis: {
                label: 'y - axis',
                domain: [-6, 6]
            },
            width: 600,
            height: 500,
            data: [{
                fn: this.props.equation
            }]
        });
    }

    render() {




        return (
            <div className={classes.NumericalGraph} id="rot1">
            </div>
        );
    }


}

export default NumericalGraph;