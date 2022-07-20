/**
 * @param {string[]} strs
 * @return {string[][]}
 */

let sort = (array) => {
  return array.sort((a, b) => {
    if (a < b) return -1;
    if ( a > b) return 1;
    return 0;
  })  
}
var groupAnagrams = function(strs) {
    // iterate over the array 
    let anagrams = {}
    for (var i = 0; i < strs.length; i++) {
        let word = strs[i]
        let sorted = sort(word.split('')).join('')
        if ( sorted in anagrams ) { anagrams[sorted].push(i)}
        else { anagrams[sorted] = [i]}
    }
    // sort the word 
    // if the word does not exits in hash
    // add array at the key containing the index of the string
    // else push to array 
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
    
    // for each key in hash 
    // create an array with each strs index at the key
    // return
    

    
}