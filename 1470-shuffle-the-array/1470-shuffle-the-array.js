/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var shuffled = []
    for (var i = 0; i < n; i++) {shuffled.push(nums[i],nums[n + i])}
    return shuffled
};