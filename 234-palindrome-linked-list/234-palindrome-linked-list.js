/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    if (!head.next) { return true }
     let rightPointer = head
     
     while (rightPointer.next) {
         let current = rightPointer
         rightPointer = rightPointer.next
         rightPointer.previous = current
     }
    
    let leftPointer = head
    while(leftPointer && rightPointer) {
        if (leftPointer.val !== rightPointer.val) { return false} 
        if (rightPointer === leftPointer || leftPointer === rightPointer.previous) { break }
        leftPointer = leftPointer.next
        rightPointer = rightPointer.previous
    }
    return true
};