/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length ) return false
    let set1 = {}
    let set2 = {}
    for (var i = 0; i < s.length; i++) {
        if (set1[s[i]]) { set1[s[i]] += 1}
            else set1[s[i]] = 1
        if (set2[t[i]]) { set2[t[i]] += 1}
            else set2[t[i]] = 1
    }
    
    for (var key in set1) {
        if (set1[key] !== set2[key]) return false
    }
    return true 
};