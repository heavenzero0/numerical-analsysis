import {postFixCalculator} from "./PostFixCalculator";
import {toPostFix2} from './ToPostFix2';

export const equationz = (equation) => {
    //console.log(equation);
    let tokens = toPostFix2(equation);
    //console.log(tokens);
    return postFixCalculator(tokens);
};