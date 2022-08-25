/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = []
    nums = nums.sort((a,b) => {return a - b})
    for (var i = 0; i < nums.length - 3; i++) {
        for (var j = i+1; j < nums.length - 2; j++){ 
            let left = j + 1
            let right = nums.length-1
            while (left < right) {
                let sum  = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum < target) { left+=1}
                else if (sum > target) {right-=1}
                else if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    while(nums[right] === nums[right-1]) { right -=1; }
                    while(nums[left] === nums[left+1]) { left+=1 }
                    while(nums[i] === nums[i+1]) { i+=1; }
                    while(nums[j] === nums[j+1]) { j+=1; }
                    right-=1
                    left+=1
               }
            }
        }
    }
    return result
};