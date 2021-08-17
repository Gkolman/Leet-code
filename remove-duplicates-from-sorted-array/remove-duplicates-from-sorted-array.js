/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var numberOfItemsRemoved = 0 
    for ( var i = 0; i < nums.length; i++) {
        var current = nums[i]
        var next = nums[i + 1]
        if (current === next) {
            nums.splice(i,1)
            i--
            numberOfItemsRemoved+=1
     // splice the element meaning put an underscore at the end and remove the current element 
        }   
    }
    return nums.length 
};