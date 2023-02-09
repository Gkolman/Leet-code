/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result;
    let minRange = 1000 ** 1000;
    nums = nums.sort((a,b) => {return a - b})
    for (var left = 0; left < nums.length - 2; left++) {
        let middle = left+1
        let right = nums.length-1
        while (middle < right) {            
            let sum = nums[left] + nums[middle] + nums[right]
            if (sum === target) { return target}
            let newRange = Math.abs(sum - target)
            if (newRange < minRange) {
                result = sum
                minRange = newRange
            }
            if (sum < target) {  
                middle+=1
            } else {
                right-=1
            } 
        }
    } 
    return result
};