/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

let mapString = (array) => {
    let map = {}
    for (var letter of array) {map[letter] = map[letter] ? map[letter]+=1 : 1}
    return map
}
let stringsMatch = (map1, array2) => {
    let map2 = mapString(array2)
    for (var letter in map1) {if (map1[letter] !== map2[letter]) return false}
    return true
}

var checkInclusion = function(s1, s2) {
    let subStringMap = mapString(s1)
    if (s1.length > s2.length) { return false }
    s1 = s1.split('')
    s2 = s2.split('')
    let left = 0;
    let right = s1.length
    while (right <= s2.length) {
        let substring = s2.slice(left, right)
        if (stringsMatch(subStringMap, substring)) { return true }
        else {left+=1;right+=1}
    }
    return false
};
    
