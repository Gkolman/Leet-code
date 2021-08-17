/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) return [-1,-1]

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            let start = i
            for (var j = i+ 1; j < nums.length; j++) {
                if (nums[j] !== target) {
                    return [start, j - 1]
                }
            }
            return [start, j - 1]
        }
    }
    
    return [-1,-1]
};