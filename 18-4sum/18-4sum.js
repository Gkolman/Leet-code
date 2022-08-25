/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    /*
    // [-2,-1, 0, 0, 1, 2]  i = 0 ; j = 1; r = 2 l, = 4
               2  3. 4.
                     5
    
    */
    // we need to sort the array
    let set = new Set()
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
                    let string = `${nums[i]}${nums[j]}${nums[left]}${nums[right]}`            
                    if (!set.has(string)) {
                        result.push([nums[i], nums[j], nums[left], nums[right]])
                        set.add(string)
                    }
                    right-=1
                    left+=1
               }
            }
        }
    }
    return result
};