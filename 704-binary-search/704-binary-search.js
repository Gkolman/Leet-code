/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let left = 0
    let right = nums.length -1
    
    while (left <= right ) {
            let mid = Math.floor((right + left) / 2)
            if (nums[mid] === target) {return mid}
            if (target < nums[mid]) {right = mid - 1} 
            else if (target > nums[mid]) {left = mid + 1}
    }
        return -1
};