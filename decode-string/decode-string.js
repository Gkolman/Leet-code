/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack  = []
    let stringStack = []
    let result = ''
    
    let ptr = 0
    while (ptr < s.length){
        console.log('numStack', numStack)
        console.log('stringStack',stringStack)        
        if (s[ptr] > -1) {
            let number = ''
            while (s[ptr] > -1) {
                number+= s[ptr]
                ptr+=1
            }
            numStack.push(parseInt(number))
        } else if (s[ptr] === '[') {
            stringStack.push(result)
            console.log('result',result)
            result = ''
            ptr +=1
        } else if (s[ptr] === ']') {
            let count = numStack.pop()
            let base = stringStack.pop()
            let newString = ''

            for (var i = 0; i < count; i++) {
                console.log('newString', newString)
                base += result
            }
            // result = newString
            result = base
            ptr+=1
        } else {
            result += s[ptr]
            ptr+=1
        }
    }
    // iterate over the string 
    // if the current element is = to a number 
    // while current element is = to a number
    // create s substring and push numbers 
    // then add number to num Stack 
    // else if the current element is = to a opening bracket 
    // while cv is = to a string add to substring
    // after add substring to string stack 
    // else if the current value is equal to a string 
    // add the string to result 

    
    return result 
};

// "3[a2[c]]"
// 

//"3[a2[c]]"
// "100[leetcode]"