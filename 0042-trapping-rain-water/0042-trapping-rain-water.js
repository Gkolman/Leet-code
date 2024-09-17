var trap = function(height) {
    if (height?.length < 3 )  { return 0 }
    let total = 0
    let l = 0
    for (let l = 0; l < height.length -1; l++) {
        let leftVal = height[l]
        if (leftVal === 0) {
            continue
        }
        let r = l+1
        let rightMax = 0;
        let rightMaxIndex = r;
        let rightLowestIndex = r
        let rightMin = r
        while (r < height.length) {
             if (height[r] > rightMax) {
                 rightMax = height[r]
                 rightMaxIndex = r
             }
            if (height[r] >= leftVal) {
                break
            }
            r+=1
        }
        // console.log("rightMaxIndex", rightMaxIndex)
        let minHeight = Math.min(leftVal, rightMax)
        let rangeSum = 0
        for (let pointer = l+1; pointer <= rightMaxIndex-1; pointer+=1 ) {
            let val = height[pointer]
            let sum = minHeight - val
            // if (sum >= 0) {
                rangeSum += sum
            // }
        }
        total += rangeSum
        l = rightMaxIndex - 1
    }
    return total
}
/*



*/