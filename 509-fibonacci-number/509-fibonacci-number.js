/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, cache = {}) {
    if (cache[n]) { return cache[n]}
    if (n === 0) { return 0}
    if (n < 3) { return 1}
    return cache[n] = fib(n - 2) + fib(n - 1)
};