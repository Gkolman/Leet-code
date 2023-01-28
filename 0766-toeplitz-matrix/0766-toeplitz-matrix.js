/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    if (matrix.length < 2) return true
    for (var row = 0; row < matrix.length - 1; row++ ) {
        for (var column = 0; column < matrix[0].length; column++) {
            if (!toeplitzDiaganol(row, column, matrix)) {return false}
        }
    }
    return true
};

const toeplitzDiaganol = (x,y, matrix) => {
    const originalNum = matrix[x][y]
    while(matrix[x] && (matrix[x][y] <= 0 || matrix[x][y] >= 0)) {
        const currentNum = matrix[x][y]
        if (originalNum !== currentNum) { return false }
        x++
        y++
    }
    return true
}
    
    /*
        0,0 1,1 2,2
        0,1 1,2 2,3
        0,2 1,3
        1,0 2,1
    */
    
    