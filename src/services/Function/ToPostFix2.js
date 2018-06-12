export const toPostFix2 = (expression) => {
    let tokens = [];
    let outputs = [];
    let x = '';

    for (let i = 0; i < expression.length; i++) {
        let token = expression.charAt(i);
        switch (token) {
            case '+': {
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
                if (check && tokens.length !== 0) {
                    while (tokens[tokens.length - 1] === '/' || tokens[tokens.length - 1] === '*' || tokens[tokens.length - 1] === '^' || tokens[tokens.length - 1] === '-') {
                        outputs.push(tokens[tokens.length - 1]);
                        tokens.pop();
                    }
                }
                tokens.push(token);
                break;
            }
            case '-': {
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
                if (check && tokens.length !== 0) {
                    while (tokens[tokens.length - 1] === '/' || tokens[tokens.length - 1] === '*' || tokens[tokens.length - 1] === '^' || tokens[tokens.length - 1] === '-') {
                        outputs.push(tokens[tokens.length - 1]);
                        tokens.pop();
                    }
                }
                tokens.push(token);
                break;
            }
            case '*':
            case '/': {
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
                if (check && tokens.length !== 0) {
                    while (tokens[tokens.length - 1] === '/' || tokens[tokens.length - 1] === '*' || tokens[tokens.length - 1] === '^') {
                        outputs.push(tokens[tokens.length - 1]);
                        tokens.pop();
                    }
                }
                tokens.push(token);
                break;
            }
            case '^': {
                tokens.push(token);
                if (x.length !== 0) {
                    outputs.push(x);
                    x = '';
                }
                break;
            }
            case '#': {
                if (x.length !== 0) {
                    outputs.push(x);
                    x = '';
                }
                let check = true;
                if (check && tokens.length !== 0) {
                    while (tokens[tokens.length - 1] === '^') {
                        outputs.push(tokens[tokens.length - 1]);
                        tokens.pop();
                    }
                }
                x += '-';
                i++;
                while (!isNaN(+expression.charAt(i))||expression.charAt(i)==='.') {
                    x += expression.charAt(i);
                    i++;
                }
                i--;
                outputs.push(x);
                x = '';
                break;
            }
            case '(': {
                if (x.length !== 0) {
                    outputs.push(x);
                    x = '';
                }
                tokens.push(token);
                break;
            }
            case ')': {
                outputs.push(x);
                x = '';
                while (tokens[tokens.length - 1] !== '(') {
                    outputs.push(tokens[tokens.length - 1]);
                    tokens.pop();
                }
                tokens.pop();
                break;
            }
            default:
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