/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0
    let unique = {}
    let longest = 0
    while (end < s.length) {
        let p1 = s[start]
        let p2 = s[end]
        if (!unique[p2]) {
            unique[p2] = p2
            end+=1
            longest = Math.max(longest,Object.keys(unique).length)
        } else {
            delete (unique[p1])
            start+=1
        }
    }
    return longest 
};