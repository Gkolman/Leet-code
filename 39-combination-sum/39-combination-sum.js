/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let cache = {}
    let traverse = (nums, t, path=[]) => {
        if (t === 0) {
            let key = path.slice().sort((a,b) => {return a-b}).join(',')
            cache[key] = true
            return
        } 
        if(t < 0) {return}
        for (var i = 0; i < nums.length; i++) {
            path.push(nums[i])
            traverse(nums.slice(i), t - nums[i], path)
            path.pop()
        }
    }
    traverse(candidates, target)
    return Object.keys(cache).map((cv) => {return cv.split(',')})
};