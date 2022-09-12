/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = []
    for (var i = 0; i < s.length; i ++) {
        
        let lastInStack = stack[stack.length - 1] 
        let currentValue = s[i]
        if (currentValue === ')') {
            if (lastInStack === '(') {
                stack.pop()
            } else {
                return false
            }
            
        } else if (currentValue === '}') {
            
            if (lastInStack === '{') {
                stack.pop()
            } else {
                return false
            }
        } else if (currentValue === ']') {
            if (lastInStack === '[') {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(currentValue)
        }
        
    }
    return stack.length === 0 ? true : false
    // write valid paranethese function 
    // every element splice it out
    // pop it back in 
    
};