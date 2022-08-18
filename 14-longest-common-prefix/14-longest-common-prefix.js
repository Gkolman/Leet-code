/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function(strs) {
    if (strs.length === 0){return strs[0]}
    let sorted = strs.sort((a,b) => {return a.length - b.length})
    if (sorted[0].length === 0) { return "" }
    let shortest = sorted[0]
    for (var word of strs) {
        let i = 0
        let run = 0
        while (word[i] === shortest[i] && i < shortest.length) {run+=1 ;i+=1 }
        if (run < shortest.length) { shortest = word.slice(0, run) }
    }
    return shortest
};