/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

let mergeLists = (l1,l2) => {
    let newList; 
    let pointer1 = l1
    let pointer2 = l2 
    let pointer3 = newList 
    if (!l2) return l1
    if (!l1) return l2

    while (pointer1) {
        if (!pointer2) break;
        if (pointer1.val <= pointer2.val) {
            if (!newList) {newList = new ListNode(pointer1.val); pointer3 = newList}
            else {pointer3.next = new ListNode(pointer1.val); pointer3 = pointer3.next}
            pointer1 = pointer1.next 
        } else { 
            if (!newList) {newList = new ListNode(pointer2.val); pointer3 = newList}
            else {pointer3.next = new ListNode(pointer2.val); pointer3 = pointer3.next}
            pointer2 = pointer2.next 
        }
    }
    while (pointer2) {pointer3.next = new ListNode(pointer2.val); pointer3 = pointer3.next;pointer2 = pointer2.next}
    while (pointer1) {pointer3.next = new ListNode(pointer1.val); pointer3 = pointer3.next;pointer1 = pointer1.next}
    return newList
}

var mergeKLists = function(lists) {
    let newList;
    if (!lists.length) return null
    if (lists.length ===1) return lists[0]
    for (var i = 0; i< lists.length - 1; i++) {
        let current = lists[i]
        let next = lists[i+1]
        if (!newList) {newList = mergeLists(current,next)}
        else {newList = mergeLists(newList,next)}
    }
    return newList === undefined ? null : newList
    
};