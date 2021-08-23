/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    islands = 0
    const recurse = (row, col) => {
        grid[row][col] = '2'
        if (grid[row][col-1] ==='1'){recurse(row, col-1)}  // left
        if (grid[row][col+1] ==='1'){recurse(row, col+1)}  // right
        if (grid[row-1]) {
            if (grid[row -1][col] ==='1'){recurse(row - 1, col)}  // up
        } 
        if (grid[row+1]) {
            if (grid[row+1][col] ==='1'){recurse(row+1, col)}  // down
        }
    }
    
    for (var row = 0; row < grid.length; row+=1) {
        for (var col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                recurse(row,col)
                console.log('grid', grid)
                islands+=1
            }
        }
    }
    return islands
    // iterate over each element in the grid 
    // for each element, find out if it has a up, down, left, or right mathing piece
    // if go left recurse left
    // if go left & everything is === 2 || 0 
    // exit this recurse 
    // iterate to next row
    // look for 1's 
    
};