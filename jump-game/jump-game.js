/**
 * @param {number[]} nums
 * @return {boolean}
 */

//[2,3,1,1,4]
//[3,2,1,0,4]

// let recurse = (idx, array) => { // idx = 1, array = [2,3,1,1,4]

var canJump = function(nums) {
    
    let dupe = []
    dupe[nums.length -1] = true
    for (var i = nums.length - 2; i > -1; i--) {
        let cv = nums[i]
        for (var j = i+1; j <= i + cv; j++) {
            if (j > nums.length) break 
            if (dupe[j]) {dupe[i] = true; break}
        }
    
    }
    if (dupe[0]){ return true}
        
    return false 
};