/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = Math.max(...nums)
    let left = 0
    while (left < nums.length - 1) {
        while (nums[left] < 0) { left+=1 }
        let nextSum = nums[left]
        right = left+1
        while (nextSum > 0 && right < nums.length) {
            nextSum+=nums[right]
            max = Math.max(max, nextSum)
            right+=1
        }
        left = right
    }
    return max
};