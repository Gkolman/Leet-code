/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let set = new Set()
    set.add('*');set.add('/');set.add('+');set.add('-')
    let stack = []
    for (var i = 0; i < tokens.length; i++) {
        let value = tokens[i]
        if (set.has(value)) {
            let right = stack.pop()
            let left = stack.pop()
            stack.push(solve(parseInt(left), parseInt(right), value))
        } else { stack.push(value)}
    }
    return stack[0]
};

let solve = (num1, num2, symbol) => {
    if (symbol === '-') {return num1 - num2}
    if (symbol === '+') {return num1 + num2}
    if (symbol === '*') {return num1 * num2}
    if (symbol === '/') {
        let result = num1 / num2 
        if (result < 0) { return Math.ceil(result)}
        return Math.floor(result)
    }
}
// take the symbol and put it before the  
// determine the last opperand