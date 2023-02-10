/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    const cache = {1: 1, 2: 2, 3: 3}
    let reached = false
    const values = [1,1]
    let first = 1
    let second = 1
    while (values[values.length - 1] < k) {
       const sum = first + second
       first = second
       second = sum
       values.push(sum)
    }
    const traverse = (target, depth = 0, memo={}) => {
        if (memo[0]) { return memo }
        if (!memo[target]) {memo[target] = depth} 
        else {
            if (memo[target] <= depth){ return memo }
            else { memo[target] = depth }
        }
        if (target <= 0 ) { return memo }
        for (var i = values.length -1; i > -1; i--) {
            traverse(target - values[i], depth+1, memo)
        }
        return memo
    }
    if (values.indexOf(k) > -1) { return 1 }
    else { return traverse(k)[0] } 
};