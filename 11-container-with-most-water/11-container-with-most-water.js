/**
 * @param {number[]} height
 * @return {number}
 */

// Input: height = [1,8,6,2,5,4,9,3,7]
//                    1             8, array[j] * j - i 
//                        
//  
//                      
//                  

var maxArea = function(height) {
    
 
    let maxWater = 0
    let left = 0;
    let right = height.length - 1;
    while (left < right) { 
    let count = (right - left) * Math.min(height[left], height[right])
    if (count > maxWater) { maxWater = count }
    if (height[left] > height[right]) { right-= 1}
    else if (height[left] < height[right]) { left += 1}
    else { left +=1; right -=1; }
    }
    
    return maxWater
};