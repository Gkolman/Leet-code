/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

    let changed = true    
    while(stones.length > 1) {
     if (changed) { stones.sort((a,b) => {return a -b}) }
     let sum = stones[stones.length - 1]  - stones[stones.length - 2]
     if (sum > 0) {
         stones.splice(stones.length-2, 2, sum)
         changed = true
     } else {
         stones.splice(stones.length -2, 2)
         changed = false
     }
    }    
    return !stones.length ? 0 : stones[0]
    
    /*
     iterate over the array 
     store the two largest numbers and there indices
     smash them -> remainder if remainedr is 0 splice out both elements 
     if there is a remainder splice out the left element and susbtitute the right element with the remainder
        [2,7,4,1,8,1]
        [1,1,2,4,7,8]
        [1,1,2,4,1]
        [1,1,2,1]
        [1,1,1]
        [1]
    */
};