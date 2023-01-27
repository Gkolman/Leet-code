/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let result = Math.max(...nums)
    let currentMax = 1
    let currentMin = 1
    for (var n of nums) {
        const temp = currentMax * n
        currentMax = Math.max(temp, currentMin * n, n)
        currentMin = Math.min(temp, currentMin * n, n)
        result = Math.max(currentMax, currentMin, result)
    }
    return result
};