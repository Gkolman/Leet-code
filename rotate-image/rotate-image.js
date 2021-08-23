/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp 
        }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (var l = 0, r = matrix.length -1; l < r; l++, r--) {
          let left = matrix[i][l]
          matrix[i][l] = matrix[i][r]
          matrix[i][r] = left
        }      
    }
    return matrix
};


