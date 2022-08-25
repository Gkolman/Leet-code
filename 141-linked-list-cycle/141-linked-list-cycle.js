/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
        
    var pointerOne = head 
    var pointerTwo = head
    while (pointerOne && pointerTwo) {
        if (!pointerOne) return false 
        if (!pointerTwo.next) return false 
        pointerOne = pointerOne.next 
        pointerTwo = pointerTwo.next.next 
        if (pointerOne == pointerTwo) return true
    }
    return false   
};