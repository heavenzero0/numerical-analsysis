import {numericalFormula} from "./NumericalFormula";
import {numericalFunction} from "./NumericalFunction";
import {approximateError} from "./ApproximateError";

export const regulaFalsi = (equation) => {
    let check = true;
    let numericals = [];
    let i = 0;
    let numerical = {
        x0: getInitials(equation).x0,
        x1: getInitials(equation).x1,
        Ae: '-'
    };
    numericals.push(numerical);

    do {
        let num = numericals[numericals.length - 1];
        let num1 = {
            x0: num.x0,
            x1: num.x1,
            Ae: '-'
        };
        let xr = numericalFormula(+num.x0, +num.x1);
        let xrf = numericalFunction(equation, xr);
        //console.log(xr);
        //console.log(xrf);
        if (xrf < 0) {
            num1.x0 = xr;
        } else {
            num1.x1 = xr;
        }
        let aae = approximateError(+num1.x0, +num1.x1);
        num1.Ae = aae.toFixed(5) + '%';
        numericals.push(num1);

        if (aae <= 0.005) {
            check = false;
        }
    } while (check);

    return numericals;
};


const getInitials = (equation) => {
    let i = 0;
    let initials = {
        x0: 0,
        x1: 0
    };



    while (true) {
        let x = numericalFunction(equation, i);
        if (x < 0) {
            initials.x0 = i;
            i++;
            if (numericalFunction(equation, i) > 0) {
                initials.x1 = i;
                break;
            }
        } else {
            i--;
        }
    }
    return initials;
};
