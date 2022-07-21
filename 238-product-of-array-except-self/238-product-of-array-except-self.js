/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let zeroCount = 0
    let sum = 1
    for (var i = 0; i < nums.length; i++) {
        let cv = nums[i]
        if (cv === 0) { zeroCount += 1; }
        else {  sum = sum *cv  }
    }
     let answer = []
     if (zeroCount > 1) { for (num of nums) { answer.push(0) }
     } else if (zeroCount > 0) {
        for (var i = 0; i < nums.length; i++) {
             if (nums[i] === 0) { answer.push(sum) } else { answer.push(0) }
        }   
    } else { for (var i = 0; i < nums.length; i++) { answer.push(sum / nums[i]) }}
    return answer 
    
};