/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const shouldExtend = (data, n) => {
    // iterate over the object 
    // sort the values 
    let sorted = Object.values(data).sort((a, b) => a - b)
    let count = 0 
    // 
    // get the elements with the lowest values 
    for (var i = 0; i < sorted.length - 1; i++) {n -= sorted[i] }
    return n >= 0 ? true : false 
}

var characterReplacement = function(s, k) {
 
    let left = 0
    let right = 0
    let longest =1
    let unique = {}
    let lives = k
    while (right < s.length) {
       // "AABABBA"
        // console.log('checking -> ', s.slice(left,right + 1),':', left ,'-',right)
        if (!unique[s[right]]) {unique[s[right]] = 1}
        else {unique[s[right]]+=1}
        
        let extend = shouldExtend(unique, k)
        
        // console.log(extend)
        // if its two pick one 
        // if its 3 pick any 
        // [AAABA]
        // [ABCEAA] k = 2
        // if k - all element but 1 < 1    

        if (extend) {
              longest = Math.max(longest,right - left +1) 
          right++
        } else {
            
        if (unique[s[left]]) {unique[s[left]]-=1}
            if (unique[s[left]] === 0) { delete unique[s[left]] }
           
        
        
        // console.log('unique after',unique)
            
          left+=1
          right+=1
        }       
    }
    return longest
};