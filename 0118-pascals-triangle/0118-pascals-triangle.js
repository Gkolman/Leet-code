/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let pyramid = constructTree(numRows)
    
    for (var row = 2; row < pyramid.length; row++ ) {
        for (var col = 1; col < pyramid[row].length -1; col++) {
            pyramid[row][col] = pyramid[row-1][col-1] + pyramid[row-1][col]
        }
    }
    return pyramid
};
const constructTree = (num) => {
    let result = []
    let i = 1
    while (i <= num) {
        let row = []
        let amount = 0
        while (amount < i) {
            row.push(1)
            amount+=1
        }
        result.push(row)
        i+=1
    }
    return result
}