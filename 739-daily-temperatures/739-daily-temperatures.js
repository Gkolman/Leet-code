/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

/*

        r = [1,1,4,2,1,0,0]
        s = [[75,2], ]
    input = [73,74,75,71,69,72,76,73]
                                ^
                                p
                                6   

*/

var dailyTemperatures = function(temperatures) {
    
    let stack = []
    let result = new Array(temperatures.length).fill(0)
    
    for (var i = 0 ; i < temperatures.length; i++) {
        let currentValue = temperatures[i]
        while(
            stack.length !== 0 &&
            stack[stack.length-1][0] < currentValue
        ){
           let [val, index] = stack.pop()
           result[index] = i - index
         }
        stack.push([temperatures[i], i])
        
    }
    return result
};