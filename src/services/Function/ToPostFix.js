export const toPostFix = (expression) => {
    let tokens = [];
    let outputs = [];
    let x = '';

    for (let i = 0; i < expression.length; i++) {
        let token = expression.charAt(i);
        if (token === '+') {
            if (x.length !== 0) {
                outputs.push(x);
                x = '';
            }
            let check = true;
            tokens.forEach(token => {
                if (token === '(') {
                    check = false;
                }
            });
            if (check && tokens.length !== 0 && tokens[tokens.length - 1] === '/' || tokens[tokens.length - 1] === '*' || tokens[tokens.length - 1] === '^') {
                outputs.push(tokens[tokens.length - 1]);
                tokens.pop();
            }
            tokens.push(token);
        } else if (token === '-') {
            if (x.length !== 0) {
                outputs.push(x);
                x = '';
            }
            let check = true;
            tokens.forEach(token => {
                if (token === '(') {
                    check = false;
                }
            });
            if (check && tokens.length !== 0 && tokens[tokens.length - 1] === '/' || tokens[tokens.length - 1] === '*' || tokens[tokens.length - 1] === '^') {
                outputs.push(tokens[tokens.length - 1]);
                tokens.pop();
            }
            if (tokens.length !== 0 && tokens[tokens.length - 1] === '(') {
                outputs.push('0');
            }
            tokens.push(token);
        }
        else if (token === '(') {
            if (x.length !== 0) {
                outputs.push(x);
                x = '';
            }
            tokens.push(token);
        } else if (token === '^') {
            tokens.push(token);
            if (x.length !== 0) {
                outputs.push(x);
                x = '';
            }
        } else if (token === '/' || token === '*') {
            if (x.length !== 0) {
                outputs.push(x);
                x = '';
            }
            let check = true;
            tokens.forEach(token => {
                if (token === '(') {
                    check = false;
                }
            });
            if (check && tokens.length !== 0 && tokens[tokens.length - 1] === '/' || tokens[tokens.length - 1] === '*' || tokens[tokens.length - 1] === '^') {
                outputs.push(tokens[tokens.length - 1]);
                tokens.pop();
            }
            tokens.push(token);
        }
        else if (token === ')') {
            outputs.push(x);
            x = '';
            while (tokens[tokens.length - 1] !== '(') {
                outputs.push(tokens[tokens.length - 1]);
                tokens.pop();
            }
            tokens.pop();
        }
        else {
            x += token;
        }
    }
    if (x.length !== 0) {
        outputs.push(x);
    }
    while (tokens.length !== 0) {
        outputs.push(tokens[tokens.length - 1]);
        tokens.pop();
    }
    return outputs;
};
