/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    let reached = false
    const values = [1]
    let first = 1
    let second = 1
    while (values[values.length - 1] < k) {
       const sum = first + second
       first = second
       second = sum
       values.push(sum)
    }
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
};