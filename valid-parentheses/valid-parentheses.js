/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    
    // iterate over the input string 
    // variable current open paren/bracket
    let values = {
        '{' : ['opening','}'],
        '}' : ['closing','{'],
        '[' : ['opening',']'],
        ']' : ['closing','['],
        '(' : ['opening',')'],
        ')' : ['closing','(']
        
    }
    var stack = []
    for (var i = 0; i < s.length; i++) {
        let cv = s[i]
        if (cv in values) {
            if (values[cv][0] === 'opening') {
                stack.push(cv)
            } else {
                let lastItemInStack = stack[stack.length-1]
                let closingType = values[cv][1]
                if (lastItemInStack !== closingType) return false 
                else {stack.pop()}
            }      
        }
    }
        return stack.length === 0 ? true : false 
};

