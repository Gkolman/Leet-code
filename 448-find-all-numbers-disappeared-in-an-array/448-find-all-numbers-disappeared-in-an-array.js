/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    for (var i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1
        nums[index] = Math.abs(nums[index]) * -1
    }
    // [4,3,2,7,8,2,3,1] 4 3
    // [4,3,2,-3,8,2,3,1]
    //   
    console.log(nums)
    let result = []
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {result.push( i + 1)}
    }
    
    return result
};