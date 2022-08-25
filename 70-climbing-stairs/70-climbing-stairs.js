/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let storage = []
    for (var i = n; i > -1; i-=1) {
        storage[i] = (storage[i+1] + storage[i+2]) || 1
        // count = Math.max(count, storage[i])
    }
    return storage[0]
};