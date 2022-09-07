/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    // iterate ovre the array 
    // for every element in the array 
    let result = 0
    for (var num of nums) {
        result = num ^ result 
    }
    return result
    
};