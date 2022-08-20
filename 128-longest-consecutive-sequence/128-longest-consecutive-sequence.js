/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    let storage = {}
    let longest = 0 
    for (var num of nums) {
        if (num in storage) { continue }
        else {
            let leftPointer = num-1
            let rightPointer = num+1
            let leftCount = 0
            let rightCount = 0
            while ( leftPointer in storage ) {leftCount += 1; leftPointer -=1 }
            while ( rightPointer in storage ) {rightCount += 1; rightPointer += 1}
            let total = leftCount + rightCount + 1
            if (total > longest) { longest = total }
            storage[num] = true
        }
    }
    return longest
};