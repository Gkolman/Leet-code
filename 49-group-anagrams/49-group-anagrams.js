/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    // iterate over the array 
    let anagrams = {}
    for (var i = 0; i < strs.length; i++) {
        let word = strs[i]
        let sorted = word.split('').sort((a, b) => {
                                            if (a < b) return -1;
                                            if ( a > b) return 1;
                                            return 0
                                        }).join('')
        if ( sorted in anagrams ) { anagrams[sorted].push(i)}
        else { anagrams[sorted] = [i]}
    }
    let result = []
    for (var word in anagrams) {
        let words = []
        let indices = anagrams[word]
        indices.forEach((indice) =>{
            words.push(strs[indice])
        })
        result.push(words)
    }
    return result
}