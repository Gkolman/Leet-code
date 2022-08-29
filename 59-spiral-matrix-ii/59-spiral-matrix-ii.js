/**
 * @param {number} n
 * @return {number[][]}
 */

let validPosition = (row, col, board) => {
    if (row < 0 || row >= board.length ) { return false }
    if (col < 0 || col >= board[0].length ) { return false }
    if (board[row][col] !== '*' ) { return false }
    return true
}
let buildMatrix = (n) => {
    let matrix = []
    for (var i = 0; i < n; i++) {
        let row = []
        for (var j = 0; j < n; j ++) {;row.push('*')}
        matrix.push(row)
    } 
    return matrix
}
var generateMatrix = function(n) {
    let matrix = buildMatrix(n)
    let count = 1
    let row = 0
    let col = 0
    matrix[0][0] = 1
    while (count < n**2 ) {
        while (validPosition(row, col+1, matrix)) {
            count+=1;col+=1;matrix[row][col] = count
        }
        while (validPosition(row+1, col, matrix)) {
            count+=1;row+=1;matrix[row][col] = count
        }
        while (validPosition(row, col-1, matrix)) {
            count+=1;col-=1;matrix[row][col] = count
        }
        while (validPosition(row-1, col, matrix)) {
            count+=1;row-=1;matrix[row][col] = count
        }
    }
    return matrix
};