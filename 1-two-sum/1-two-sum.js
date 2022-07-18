/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // if (nums.length < 2) return
    let hash = {}
    for (var i = 0; i < nums.length; i++) {
        if (target - nums[i] in hash) return [hash[ target - nums[i]], i]
        else { hash[nums[i]] = i }
    }
    
//         let map = {};
//         for (let i = 0; i < nums.length; i++) {
//         if (target - nums[i] in map) {
//             return [map[target-nums[i]], i];
//         } else {
//             map[nums[i]] = i;
//         }
//     }
};
    
    
/*
iterate over the array 

for every element in the array 

subtract the amount

if the amount subtracted is greater than are target
*/