/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let newList;
    let pointer1 = l1
    let pointer2 = l2
    let pointer3 = newList    
    if (!l1) { return l2}
    if (!l2) { return l1}
    while (pointer1) {
        if (!pointer2) break;
        if (pointer1.val <= pointer2.val) {
            if (!newList) {newList = new ListNode(pointer1.val); pointer3 = newList}
            else {pointer3.next = new ListNode(pointer1.val); pointer3 = pointer3.next}
            pointer1 = pointer1.next
        } else {
            if (!newList) { newList = new ListNode(pointer2.val); pointer3 = newList}
            else {pointer3.next = new ListNode(pointer2.val); pointer3 = pointer3.next}
            pointer2 = pointer2.next  
        }  
    }
    while (pointer2) {
        pointer3.next = new ListNode(pointer2.val); pointer3 = pointer3.next;pointer2 = pointer2.next  
    }
    while (pointer1) {
        pointer3.next = new ListNode(pointer1.val); pointer3 = pointer3.next;pointer1 = pointer1.next  
    }
    return newList
};