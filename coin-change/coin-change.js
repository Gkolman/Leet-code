/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = (coins, amount) => {

  if (amount === 0) return 0
  let lowestCount;
  let cache = {}
  // coins.sort((a,b) => b-a)
  let recurse = (targetSum, depth, path) => {
    let flag; 
    let length = path.length
    if (cache[targetSum] === true) {return true}
    if (cache[targetSum] === false) {return false}    
    if (cache[targetSum] <= depth) {
        return true
        cache[targetSum]
    }
    if (targetSum === 0) {
      flag = true 
      if (!lowestCount) {lowestCount = depth}
      else if (lowestCount > depth) {lowestCount = depth} 
      // update cache;
      // update lowest count;
      if (!cache[targetSum]) {cache[targetSum] = depth}
      else if (cache[targetSum] > depth) {cache[targetSum] = depth} 
      return true
    } else if (targetSum < 0) {return false}
    
    for (let j = 0; j < coins.length; j++) {
      path.push(coins[j])
      if (recurse(targetSum - coins[j], depth+1, path)) {
          flag = true
      } else {
          // cache[targetSum - coins[j]] = false; 
      }
      path.pop()        
    }
    
    if (!flag) {
        cache[targetSum] = false
        return false 
    } else {
        cache[targetSum] = length
        return true 
    } 
  } 
  for (let i = 0; i < coins.length; i++) {
    let cv = coins[i]
    let start = [cv]
    recurse(amount - cv, 1, start)
  }
    console.log('cache', cache)
  return lowestCount ? lowestCount : -1
} 
/*
[1,2,5] 5
{4: 5}
denoms = [1], sum = 4 operations = 4,  
denoms = [1,1], sum = 3 operations = 3
denoms = [1,1,1], sum = 2 operations = 2
denoms = [1,1,1,1], sum = 1 operations = 1
denoms = [1,1,1,1,1] sum = 0 operations = 0

denoms = [1,1,1,2] sum = 0 operations = 0

denoms = [1,1,2] sum = 1 operations = 1
denoms = [1,1,2,1] sum = 0 operations = 0



denoms = [2], sum = 4 operations = 4,  
denoms = [2,1], sum = 3 operations = 3
denoms = [2,1,1], sum = 2 operations = 2
denoms = [2,1,1,1], sum = 1 operations = 1

denoms = [2,2], sum = 4 operations = 4,  
denoms = [2,2,2], sum = 3 operations = 3

 



{}

*/
    


/*
I: coins -> array of integers, amount -> target sum of denominations 
O: return the lowest amount of denominations required to make the target sum 
    
C   - 1 <= coins.length <= 12
    - 1 <= coins[i] <= 231 - 1
    - 0 <= amount <= 10
    
E   - if we cannot make the sum with the given coins return -1  
*/

    
    
    

    /*
        target 11

        [1,2,5]   target 10                                       -> 5 + 5 + 1 -> 3 
         ^    
        [1,2,5]   target 5
             ^
        [1,2,5]   target 0
             ^
         ^              
             
    if target === 0 
    we found denominations that equate to the target sum 
    get the amount of denominations used to get to the target sum 
    if amount of denominations used is < the current lowest amount 
    update lowest denominations count 
        can have duplicate numbers 
        
        if target < 0 
    // 
        
        
    */