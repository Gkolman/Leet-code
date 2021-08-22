/**
 * @param {number[][]} image
 * @return {number[][]}
 */

const hFlip = (array) => {
    for (var l = 0, r =array.length -1; l < r; l++, r--) {
        let leftVal = array[l], rightVal = array[r]
        array[l] = rightVal 
        array[r] = leftVal
    }
    return array 
}
const invert = (array) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {array[i] = 1} else {array[i] = 0}
    }
}

var flipAndInvertImage = function(image) {
    if (!image || !image.length) return 
    for (var row of image) {row = invert(hFlip(row))}
    return image
};

/*
I: a 2d array 
O: 2 horizontally flipped image that is then inverted 
C: 1 <= n <= 20, images[i][j] is either 0 or 1
E: image could be empty 
*/
