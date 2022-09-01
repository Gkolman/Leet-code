/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let valid = (row, col, board, haveBeen, word) => {
    let key = row + ',' + col
    if (haveBeen.has(key)) {return false}
    if (row < 0 || col < 0) {return false}
    if (row >= board.length || col >= board[0].length) {return false}
    if (board[row][col] !== word[0]) { return false}
    return true
}
var exist = function(board, word) {
    let found = false
    let traverse = (row, col, word, haveBeen = new Set()) => {
        word = word.slice(1)
        let key = row + ',' + col
        haveBeen.add(key)
        if (!word.length) { found = true; return}
        
        if (valid(row, col+1, board, haveBeen, word)) {
           traverse(row, col+1, word, haveBeen)
        }
        if (!word.length) { found = true; return}
        if (valid(row + 1, col, board, haveBeen, word)) {
            traverse(row+1, col, word, haveBeen)
        }
        if (!word.length) { found = true; return}        
        if (valid(row, col-1, board, haveBeen, word)) {
            traverse(row, col-1, word, haveBeen)
        }
        if (!word.length) { found = true; return}       
        if (valid(row -1, col, board, haveBeen, word)) {
            traverse(row-1, col, word, haveBeen)
        }
        haveBeen.delete(key)
    }
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            let current = board[i][j]
            if (current === word[0]) {
                traverse(i, j, word)
            }
        }
    }
    return found
};