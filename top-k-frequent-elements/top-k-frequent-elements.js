/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function Node(val, count = 1) {
  this.val = val;
  this.count = count
}
var topKFrequent = function(nums, k) {
    let occurances = {}
    for (var i = 0; i < nums.length; i++) {
        let key = nums[i].toString()
        if (!occurances[key]) {occurances[key] = new Node(nums[i],1)}
        else {occurances[key].count +=1}
    }
    let sorted = []
      for (var key in occurances) {sorted.push(occurances[key])}
      sorted = sorted.sort((a,b) => { return b.count - a.count})
      console.log('sorted', sorted)
    let mostFrequent =  sorted.slice(0,k)
    let mostFrequentVals = []
    for (var node of mostFrequent) {
      mostFrequentVals.push(node.val)
    }
    return mostFrequentVals
};