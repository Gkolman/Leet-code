/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
    let characters = {}
    //  itterate over the array 
    for (var i = 0; i < chars.length; i++) {
        let cv = chars[i]
        let end = i+1
        let numOfChars = 1
        while (cv === chars[end]) {end+=1;numOfChars +=1}
        let subString = numOfChars.toString()
        chars.splice(i+1,numOfChars-1)
        console.log('chars after splice', chars)
        if (numOfChars > 1) {
            for (var j = 0; j < subString.length; j++) {
                let num = subString[j]
                chars.splice(i+=1, 0, num)
            }
        }
        console.log('chars after num add', chars)
    }
    // X for ever value 
    // X determine if it the start of a run or the end of a run 
    // X set current and next pointer 
    // X while next is equal to run value 
    // X at the end of the iteration 
    // X get the run length and convert to string 
    // X splice out the input array with the start point of the run and the end point of the run 
    // X creat a string with the run type "char" plus add run length 
    // X at the start index of the run 
    // X insert each letter of the string at a time 
    // X for every insertion of the stirng increment the pointer 
    // X we need to mutate the inout array 
    console.log('chars -> ', chars)
    return chars.length
};