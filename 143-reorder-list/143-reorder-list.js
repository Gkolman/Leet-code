/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let values = []
    let current = head
    while (current) { values.push(current.val);current = current.next}
    if (values.length === 1) { return head } 
    head.next = null
    let left = 1
    let right = values.length -1
    while (left <= right) {
        let current = head
        while (current.next) { current = current.next }
        if (left === right) { current.next = new ListNode(values[left])}
        else { current.next = new ListNode(values[right], new ListNode(values[left]))}
        left+=1 
        right-=1
    }
};