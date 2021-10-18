/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let islands = 0
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
                islands+=1
            }
        }
    }
    return islands
};