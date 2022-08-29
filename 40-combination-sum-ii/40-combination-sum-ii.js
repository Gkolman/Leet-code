/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = {}
    let nums = {}
    for (var c of candidates) {
        if (c in nums) { nums[c] +=1} else {nums[c] = 1}
    }
    
    let traverse = (target, storage, path = []) => {
        if (target === 0) {
            let key = path.slice().sort((a,b) => {return a - b}).join(',')  
            result[key] = true
            return 
        }
        if (target < 0) return;
        for (var key in storage) {
            let copy = JSON.parse(JSON.stringify(storage))
            if (copy[key] === 1) {delete copy[key]}
            else {copy[key] -=1}
            path.push(key)
            traverse(target - key, copy, path)
            path.pop()
        }
    }
    traverse(target, nums)
    return Object.keys(result).map((cv) => {return cv.split(',')})    
};