function parse(source) {
    let stack = [];
    for (let c of source) {
        if (c ==='(' || c === '[' || c==='{') {
            stack.push(c);
        }

        if (c === ')') {
            if (stack[stack.length-1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        } else if (c ===']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                return false;
            }
        } else if (c === '{') {
            if (stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}