/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    s = s.split('')
    let types = {
        '(' : ['open',')'],
        ')' : ['close','('] 
    }
    // iterate over the string
    
    let queue = []
    for (var i = 0; i < s.length; i++) {
        var cv = s[i]
        if (cv in types) {
            if (types[cv][0] === 'open') {
                let node = {value: cv, index: i}
                queue.push(node) 
            } else {
                if (queue.length < 1) {
                    s.splice(i,1)
                    i-=1
                } else {queue.pop()}
            }
        }
    }
         console.log('queue', queue)
        console.log('s',JSON.stringify(s))
    for (var i = queue.length - 1; i >= 0; i--) {
        cv = queue[i]
        s.splice(cv.index,1)
    }
    return s.join('')
};