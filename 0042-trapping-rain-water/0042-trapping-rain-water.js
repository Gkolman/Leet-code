var trap = function(height) {
    if (height?.length < 3 )  { return 0 }
    let total = 0
    let lp = 0;
    let rp = height.length - 1
    let leftMax = 0
    let rightMax = 0
    while (lp <= rp) {
        let leftVal = height[lp]
        let rightVal = height[rp]
        leftMax = Math.max(leftMax, leftVal)
        rightMax = Math.max(rightMax, rightVal)
        let min = Math.min(leftMax, rightMax) 
        if (rightVal < leftVal)  {
            if (min - rightVal > 0) {
             total += min - rightVal   
            }
            rp-=1
            
        } else {
            if (min - leftVal > 0) {
             total += min - leftVal   
            }
            lp+=1
        }
    }
    return total
}