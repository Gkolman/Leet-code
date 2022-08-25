/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let largest = 0
    let l = 0, r = 1
    while (r < prices.length) {
        if (prices[r] <= prices[l])  { l = r } 
        largest = Math.max(largest,  prices[r] - prices[l])
        r+=1 
    }
        
    return largest
};