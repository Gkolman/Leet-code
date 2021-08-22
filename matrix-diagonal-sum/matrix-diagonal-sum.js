/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let topBLR = 0 
    let botTLR = 0
    for (var i = 0, j = mat.length -1; i < mat.length; i++, j--) {
        topBLR += mat[i][i]
        botTLR += mat[j][i]
    }
    let mid = Math.floor(mat.length /2)
    return mat.length % 2 === 0 ? topBLR + botTLR : topBLR + botTLR - mat[mid][mid]
};

/*

Input
[[1,1,1,1]
,[1,1,1,1]
,[1,1,1,1]
,[1,1,1,1]]

*/
