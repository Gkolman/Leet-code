/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {  
    let total = 0
    let sum = 0
    for (var i = 0; i < nums.length; i++) {total += i;sum += nums[i]}
    total += nums.length
    return total - sum
};