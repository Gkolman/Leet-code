/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const xOutHorizontal= (m, row,col) => {
    let start = col
    let end = col 
    while (end < m[0].length - 1) {
        end++
        m[row][end] = 0
    }
    while (start > 0) {
        start--
        m[row][start] = 0
    }
    return m 
}

const xOutVertical= (m, row,col) => {
    let start = row
    let end = row 
    while (end < m.length) {
        end++
        if (m[end]) {m[end][col] = 0   }
        console.log('entering')

    }
    while (start > 0) {
        start--
        if (m[start]) {m[start][col] = 0   }
    }
    return m 
}
var setZeroes = function(matrix) {
    
    // iterate over the array 
    // record coordinates of 0's 
    
    // given coordinate 
    let coordinates = []
    for (var row = 0; row < matrix.length; row++) {
        for(var col = 0; col < matrix[row].length;col++) {
            if (matrix[row][col] === 0) {coordinates.push([row,col])}
        } 
    }
    for (var coordinate of coordinates) {
        matrix = xOutHorizontal(matrix,coordinate[0], coordinate[1])
        matrix = xOutVertical(matrix,coordinate[0], coordinate[1])

    }
    return matrix
    // iterate to max and min of row making x's
    // oterate to max and min of col making x's 
    
    
    
};