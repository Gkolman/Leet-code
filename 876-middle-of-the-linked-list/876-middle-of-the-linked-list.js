/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let pointer = head
    let length = 0
    while (pointer) {
        pointer = pointer.next
        length +=1
    }
    if (length === 1) { return head}
    let middle = Math.floor(length / 2)
    pointer = head
    let position = 0   
    while (pointer) {
        if (position === middle) return pointer
        pointer = pointer.next
        position +=1
    }
};