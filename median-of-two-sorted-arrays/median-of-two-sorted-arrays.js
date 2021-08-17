/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
var left = 0 
var i = 0;
var y = 0;
var sorted = []
while (i < nums1.length && y < nums2.length) {
  console.log('entering')
  
    if (nums1[i] < nums2[y]){
        sorted.push(nums1[i]);
        i++;
    }
    else {
        sorted.push(nums2[y]);
        y++;
    }
}
while (i < nums1.length){
  sorted.push(nums1[i]);
    i++;
}

while (y < nums2.length){
    sorted.push(nums2[y]);
    y++;
}
if (sorted.length % 2 === 0) {
  return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2 
} else {
  return sorted[Math.floor(sorted.length / 2)]
}
};
