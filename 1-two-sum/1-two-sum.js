/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // if (nums.length < 2) return
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) { return  [i, j]  }
        } 
    }
};
    
    
/*
iterate over the array 

for every element in the array 
 
 iterate over the array again

subtract the amount from the total
add the numbers indice to an array

if the amount subtracted is greater than are target
*/