/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let anagrams = {}
    for (var i = 0; i < strs.length; i++) {
        let word = strs[i]
        let sorted = word.split('').sort().join('')
        if ( sorted in anagrams ) { anagrams[sorted].push(strs[i])}
        else { anagrams[sorted] = [strs[i]] }
    }
    let result = []
    for (var word in anagrams) {
        result.push(anagrams[word])
    }
    return result
}