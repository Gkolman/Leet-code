/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    // validate if the individual squares are valid
    // validate if the whole square is valid
    for (var row = 0; row < 9; row+=3) {
        for (var col = 0; col < 9; col +=3) {
            if (invalidSmall(row, col, board)) { 
                console.log("hitting small")
                return false 
            }
        }
    }

    for (var i = 0; i < 9; i ++) {
        if (invalidRow(i, board)) { return false }
        if (invalidCol(i, board)) { return false }
    } 
    return true
};

const invalidSmall = (row, col, board) => {
    const set = new Set()
    for (var i = row; i < row+3; i++) {
        for (var j = col; j < col+3; j++ ) {
            const char = board[i][j]
            if (char === '.') { continue }
            else if (set.has(char)) { return true }
            else { set.add(char) }
        }
    }
    return false
}

const invalidRow = (col, board) => {
    
    const set = new Set()
    for (var row = 0; row < 9; row ++) {
        const char = board[row][col]
        if (char === '.') { continue }
        else if (set.has(char)) { return true }
        else { set.add(char) }
    }
    return false
}

const invalidCol = (row, board) => {
    const set = new Set()
    for (var col = 0; col < 9; col++) {
        const char = board[row][col]
        if (char === '.') { continue }
        else if (set.has(char)) { return true }
        else { set.add(char) }
    }
    return false
}