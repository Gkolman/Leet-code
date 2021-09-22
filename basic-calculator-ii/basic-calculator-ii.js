/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s) return 0
    let ns = []
    let os = []
    let p = 0
    while (p < s.length) {
        // console.log('ns', ns)

        if (s[p] === '*' ) {
            let lastNum = ns.pop()
            let nextNum = 0
            p+=1
            while (s[p] === ' '){p+=1}
            while (s[p] > -1 && s[p] !== ' ') {nextNum = 10 * nextNum + parseInt(s[p]);p+=1}
            let newNum = lastNum * nextNum
            ns.push(newNum)
            // 
        } else if (s[p] === '/') {
            let lastNum = ns.pop()
            let nextNum = 0
            p+=1
            while (s[p] === ' '){p+=1}
            while (s[p] > -1 && s[p] !== ' ') {nextNum = 10 * nextNum + parseInt(s[p]);p+=1}
            let newNum = Math.floor(lastNum / nextNum)
            ns.push(newNum)
        } else if (s[p] === '-' || s[p] === '+') {
            os.push(s[p])
            p+=1
        } else if (s[p] > -1) {
            let newNum = null
            console.log('beggining',  s[p] === ' ')
            while (s[p] === ' '){p+=1}
            while (s[p] > -1 && s[p] !== ' ') {
                if (newNum === null ) newNum = 0
//                 console.log('newNum', newNum)
//                 console.log('here1',  parseInt(s[p]))
//                 console.log('here2',  s[p])
            
                newNum = 10 * newNum + parseInt(s[p])
                p+=1
            }
            if (newNum !== null){  ns.push(newNum)}
          
        } else {
            p+=1
        }
        
    }
    
    // "3+2-2"
    // ["3+2-2"]
    // [3,2,2]
    // [+,-]
    // 
    // console.log('ns', ns)
    // console.log('os', os)
    let acc = null
    if (ns.length === 1) return ns[0]
    for (var i = 0; i < ns.length - 1; i++) {
        let op = os[i]
        let nextNum = ns[i+1]
        if (op === '-') {
            if (acc === null) {acc = ns[i]}
            acc = acc - nextNum            
        }
        if (op === '+') {
            if (acc === null) {acc = ns[i]}
            acc = acc + nextNum            
        }
    }
    
    return acc 
    
    // "3+2*2-6"
};