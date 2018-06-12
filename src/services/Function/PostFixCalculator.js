import * as operator from './Operator';


export const postFixCalculator = (tokens) => {
    let variables = [];
    tokens.forEach(token => {
        switch(token) {
            case ('+'): {
                let secondValue = variables[variables.length - 1];
                variables.pop();
                let firstValue = variables[variables.length - 1];
                variables.pop();
                const output = operator.plus(+firstValue, +secondValue);
                variables.push(output);
                break;
            }
            case ('^'): {
                let secondValue = variables[variables.length - 1];
                variables.pop();
                let firstValue = variables[variables.length - 1];
                variables.pop();
                const output = operator.exponent(+firstValue, +secondValue);
                variables.push(output);
                break;
            }
            case ('-'): {
                let secondValue = variables[variables.length - 1];
                variables.pop();
                let firstValue = variables[variables.length - 1];
                if(firstValue == null) {
                    variables.pop();
                    const output = operator.minus(0, +secondValue);
                    variables.push(output);
                }else {
                    variables.pop();
                    const output = operator.minus(+firstValue, +secondValue);
                    variables.push(output);
                }
                break;
            }
            case ('*'): {
                let secondValue = variables[variables.length - 1];
                variables.pop();
                let firstValue = variables[variables.length - 1];
                variables.pop();
                const output = operator.product(+firstValue, +secondValue);
                variables.push(output);
                break;
            }
            case ('/'): {
                let secondValue = variables[variables.length - 1];
                variables.pop();
                let firstValue = variables[variables.length - 1];
                variables.pop();
                const output = operator.divide(+firstValue, +secondValue);
                variables.push(output);
                break;
            }
            default:
                variables.push(token);
        }
        //console.log(variables + ' tokens=' + token);
    });

    return +variables[variables.length - 1];
};