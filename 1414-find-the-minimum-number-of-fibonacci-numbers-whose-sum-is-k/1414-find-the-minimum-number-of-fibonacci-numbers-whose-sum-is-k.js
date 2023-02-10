/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    const cache = {1: 1, 2: 2, 3: 3}
    let reached = false
    const values = [1,1]
    let first = 1
    let second = 1
    while (values[values.length - 1] < k) {
       const sum = first + second
       first = second
       second = sum
       values.push(sum)
    }
    if (values.indexOf(k) > -1) { return 1 }
    else { 
        let result = 0
        let i = values.length - 1
        while (k > 0) {
            while (k >= values[i]) {     
                result +=1
                k-= values[i]
            }
            i-=1
        }
        return result
    } 
};