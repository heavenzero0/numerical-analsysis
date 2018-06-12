import {equationz} from '../Function/Equation';

export const numericalFunction = (equation, x) => {

    //let str = equation.replace('x', x);
    let expression = '';

    for (let i = 0; i < equation.length; i++) {
        if (i !== 0 && equation.charAt(i) === 'x' && !isNaN(+equation.charAt(i - 1))) {
            if (x < 0) {
                expression += '*(' + x + ')';
            } else {
                expression += '*' + x;
            }
        } else if (equation.charAt(i) === 'x') {
            if (i !== 0 && x < 0 && equation.charAt(i - 1) === '-') {
                expression = expression.slice(0, -1);
                expression += '+#1*#' + Math.abs(x);
            }
            else if (x < 0) {
                expression += '#' + Math.abs(x);
            }
            else {
                expression += x;
            }
        } else {
            expression += equation.charAt(i);
        }
    }
    //console.log(expression);
    return +equationz(expression).toFixed(5 );

};