/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1]
    while (left <= right ) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) { return middle}
        if (nums[left] <= nums[middle] ) {
            if (nums[left] <= target && target < nums[middle] ) { right = middle - 1}
            else { left = middle + 1}
        } else {
            if (nums[right] >= target && nums[middle] < target) { left = middle + 1}
            else {right = middle - 1}
        }
    }
    return -1 
};