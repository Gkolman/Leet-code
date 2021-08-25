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
    console.log( n * matrix[0].length)
    while (container.length !==  n * matrix[0].length) {
    // while (count < 3) {
        while (matrix[row][col+1] === 0 || matrix[row][col+1] && matrix[row][col+1] !== '*') { // go right
            console.log('here -> ',matrix[row][col] )
            container.push(matrix[row][col+1])
            matrix[row][col+1] = '*'
            col+=1
            // console.log('row', row, 'col', col)
        }   // go right 
        // col-=1
        while (matrix[row+1]) { 
            if(matrix[row+1][col] === 0 || matrix[row+1][col]){ // go down
                if(matrix[row+1][col] !== '*') {
                    container.push(matrix[row+1][col])
                    matrix[row+1][col] = '*'        
                } else {break; }                
           
            } // go down 
             row+=1
        } // down 
        console.log('before going left', row,col)
        while (matrix[row][col-1] === 0 || matrix[row][col-1] && matrix[row][col-1] !== '*')  { // go left 
                    container.push(matrix[row][col-1])
                    matrix[row][col-1] = '*'
                    col-=1
        }   
//         col+=1
        // console.log('before going up ', 'row', row, 'col', col)

        while (matrix[row-1]){
            if (matrix[row-1][col] === 0 || matrix[row-1][col]) { // go up
                if(matrix[row-1][col] !== '*') {
                    container.push(matrix[row-1][col])
                    matrix[row-1][col] = '*'        
                } else {break; }
      
            }    // go up 
                row-=1
        }
        // row+=1

        count+=1
    }
    
        return container
};

    /*
[[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,26,27,28,29,30],[31,32,33,34,35,36,37,38,39,40],[41,42,43,44,45,46,47,48,49,50],[51,52,53,54,55,56,57,58,59,60],[61,62,63,64,65,66,67,68,69,70],[71,72,73,74,75,76,77,78,79,80],[81,82,83,84,85,86,87,88,89,90],[91,92,93,94,95,96,97,98,99,100]]
 
 got =[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,99,98,97,96,95,94,93,92,91,81,71,61,51,41,31,21,11,12,13,14,15,16,17,18,19,29,39,49,59,69,79,89,88,87,86,85,84,83,82,72,62,52,42,32,22,23,24,25,26,27,28,38,48,58,68,78,77,76,75,74,73,63,53,43,33]
 ex  =[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,99,98,97,96,95,94,93,92,91,81,71,61,51,41,31,21,11,12,13,14,15,16,17,18,19,29,39,49,59,69,79,89,88,87,86,85,84,83,82,72,62,52,42,32,22,23,24,25,26,27,28,38,48,58,68,78,77,76,75,74,73,63,53,43,33,34,35,36,37,47,57,67,66,65,64,54,44,45,46,56,55]
    */
    // while 