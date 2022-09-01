/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    // iterate over the matrix 
    /*
    for each row we are going to check if the left is less than or === our target 
    and check if our right is < or = our target 
    if both are true this is where we want to do our search 
     else we can break out because we know another row won't have the value 
    */
    
    for (var i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        let left = 0
        let right = row.length - 1
        if (matrix[i][left] <= target && matrix[i][right] >= target) {
            while (left <= right) {
                let mid = Math.floor((left + right) / 2)
                if (row[mid] === target) { return true}
                else if (row[mid] <= target) { left = mid +1} 
                else {right = mid -1}
            }
            break;
        }      
    }
    return false
};