/**
 * @param {string} s
 * @return {number}
 */




var firstUniqChar = function(s) {
    
    let occurances = {}
    let result = -1

    for (var i= 0; i< s.length; i++) {
        if (!occurances[s[i]]) occurances[s[i]] = {index : i, count: 1};
        else {occurances[s[i]].count +=1}
    }
    for (var key in occurances) {
        if (occurances[key].count === 1) return occurances[key].index 
    }
    return result
    // iterate over the string 
    // for each element in the string 
    // we are going to add to our queue 
    // if the element is alread in the queue 
    //. we will remove the occurance 
    //. 
    
    
};