/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    const cache = {1: 1, 2: 2, 3: 3}
    let reached = false
    const fibonacci = (num) => {
        if (cache[num]) { return cache[num] }
        let leftTree = fibonacci(num-1)
        if (reached) { return }
        let rightTree = fibonacci(num-2)
        const sum = leftTree + rightTree
        cache[num] = sum
        if (sum > k || reached) { 
            reached = true
            return cache[num]
        } else { 
            fibonacci(num+1) 
        }
    }
    fibonacci(4)
    const values = Object.values(cache)
    const traverse = (target, depth = 0, memo={}, index = values.length -1) => {
        if (memo[0]) { return memo }
        if (!memo[target]) {memo[target] = depth} 
        else {
            if (memo[target] <= depth){ return memo }
            else { memo[target] = depth }
        }
        if (target <= 0 ) { return memo }
        for (var i = index; i > -1; i--) {
            traverse(target - values[i], depth+1, memo, index-1)
        }
        return memo
    }
    if (values.indexOf(k) > -1) { return 1 }
    else { return traverse(k)[0] } 
};