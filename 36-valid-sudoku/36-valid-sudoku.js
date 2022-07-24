/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isUniqueBig = (pointer, board, type) => {
    let unique = {}
    for (var i = 0; i < board.length; i++) {
        let num;
        if (type === 'vert') {num = board[i][pointer]}
        else { num = board[pointer][i] }
        if (num == '.') {continue}
        if (num in unique) {return false}
        else {unique[num] = 1}
    }
    return true
} 

let isUniqueSmall = (r, c, board) => {
    let unique = {}
    for (var row = r; row < r + 3; row++) {
        for (var col = c; col < c + 3; col++) {
            let num = board[row][col]
            if (num == '.') { continue }
            if (num in unique) {return false}
            else {unique[num] = 1}
        }
    }
    return true
} 

var isValidSudoku = function(board) {
    for (let i = 0;  i < board.length; i++) {
        let vert = isUniqueBig(i, board, 'vert')
        let horiz = isUniqueBig(i,  board, 'horiz')
        if (!vert || !horiz) { return false }
    }
    
    for (let r = 0;  r < board.length; r += 3) {
        for (let c = 0;  c < board.length; c += 3) {
            if (!isUniqueSmall(r, c, board)) { return false}
        }
    }
    
    return true
};