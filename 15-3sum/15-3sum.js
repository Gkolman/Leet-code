/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(array) {
     array.sort((a,b) => a - b);
    const triplets = [];

    for(var i= 0; i < array.length - 2; i++){
        let left = i + 1;
        let right = array.length - 1;
        while (left < right){
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === 0){
                triplets.push([array[i], array[left], array[right]]);
                while(array[left] == array[left + 1]) {left ++}
                while(array[right] == array[right - 1]) { right++}
                left ++;
                right --;
            } else if(currentSum < 0) {left++} else if(currentSum > 0){right--}
        }
        while(array[i] === array[i+1]) { i+=1}
    }
    return triplets
};


/*
//             ^    ^ ^  ^  ^

// [-4,-1,-1,0,1,2,]
//  ^   ^           
// [-1,0,0,1]
Output: [[-1,-1,2],[-1,0,1]]

*/