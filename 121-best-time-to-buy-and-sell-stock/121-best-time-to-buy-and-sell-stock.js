/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // iterate over the array
    // we have one pointer leftthat marks a buy time 
    // while the right arrow 
    // while the right number is smaller than the left number 
    
    // [7,1,5,3,6,4]
    //      ^ ^    
    // if right < left increament right pointr 
    // 
    let largest = 0
    let l = 0, r = 1
    while (r < prices.length) {
        // each pointer must have a plus one and a minus one
        if (prices[r] <= prices[l])  { l = r } 
        largest = Math.max(largest,  prices[r] - prices[l])
        r+=1 
        // else { l = r; r = r+1}
        // while (prices[r + 1] === prices[r]) { r+=1  }
        // while ( prices[l + 1]  === prices[l]) { l+=1}
        // else{ l += 1; r +=1}
    }
        
    return largest
};