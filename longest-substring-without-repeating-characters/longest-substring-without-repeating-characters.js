/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var left = 0
    var right = 0
    var set = new Set()
    var tracker = 0
    while(right < s.length) {
        if (!set.has(s[right])) { 
            set.add(s[right])
            tracker = Math.max(tracker, set.size)
        right++
        } else {
            set.delete(s[left]);
            left++ 
        }
    }
    return tracker 
};