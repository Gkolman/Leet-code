/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let n = matrix.length
    let container = [matrix[0][0]]
    matrix[0][0] = '*'
    let row= 0
    let col=0
    let count = 0
    while (container.length !==  n * matrix[0].length) {
    // while (count < 3) {
        while (matrix[row][col+1] === 0 || matrix[row][col+1] && matrix[row][col+1] !== '*') { // go right
            container.push(matrix[row][col+1]);matrix[row][col+1] = '*';col+=1
        }   
        while (matrix[row+1]) { 
            if(matrix[row+1][col] === 0 || matrix[row+1][col]){ // go down
                if(matrix[row+1][col] !== '*') {
                    container.push(matrix[row+1][col]);matrix[row+1][col] = '*'        
                } else {break; }                
            } 
             row+=1
        }  
        while (matrix[row][col-1] === 0 || matrix[row][col-1] && matrix[row][col-1] !== '*')  { // go left 
                    container.push(matrix[row][col-1]);matrix[row][col-1] = '*';col-=1
        }   
        while (matrix[row-1]){
            if (matrix[row-1][col] === 0 || matrix[row-1][col]) { // go up
                if(matrix[row-1][col] !== '*') {
                    container.push(matrix[row-1][col]);matrix[row-1][col] = '*'        
                } else {break; }
            }   
                row-=1
        }
        count+=1
    }
        return container
};