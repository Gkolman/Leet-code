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
var reverseList = function(head) {
    if (!head) return head
    let pointer = head
    let container = []
    while(pointer) {
        container.push(pointer.val)
        pointer = pointer.next 
    }
    let newlist = new ListNode(container.pop())
    let nextPointer = newlist
    while (container.length) {
        nextPointer.next = new ListNode(container.pop())
        nextPointer = nextPointer.next
    }
    return newlist
};
    