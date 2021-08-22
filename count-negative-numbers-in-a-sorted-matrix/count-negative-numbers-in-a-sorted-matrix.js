/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[row].length; col++) {
            if (grid[row][col] < 0) { continue }
            else {count +=1}
        }
    }
    return (grid.length * grid[0].length ) - count 
};
