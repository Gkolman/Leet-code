/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let sorted_ref = nums.sort()
    let numbers = {}
    for(var num of nums) {
        let set = []
        if (num in numbers) { numbers[num]['count'] += 1 }
        else { numbers[num] = {'value': num, 'count': 1} }
    }
    let storage = []
    for (var value in numbers) {storage.push(numbers[value])}
    let sorted = storage.sort((a, b) => b.count - a.count)
    // console.log('sorted -> ', sorted)
    let mostOccurances = sorted.slice(0, k)
    let result = []
    for (var occurance of mostOccurances) {
        console.log('occurance -> ', occurance)
        result.push(occurance['value'])
    }
    return result
};