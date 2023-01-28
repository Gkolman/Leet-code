/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0 ) { return 0 }
    let recurse = (amount, depth = 0, cache = {}) => {
        if (!cache[amount]) { cache[amount] = depth } 
        else {
            if (cache[amount] <= depth) { return cache } 
            else { cache[amount] = depth }
        }
        if (amount <= 0 ) { return cache }
        for (var i = 0; i < coins.length; i++) {
            recurse(amount - coins[i], depth+1, cache)
        }
        return cache
    }
    const result = recurse(amount)
    return result[0] || -1
};