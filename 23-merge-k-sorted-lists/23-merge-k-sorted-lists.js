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

var mergeKLists = function(lists) {
    if (!lists || lists.length < 1) { return null}
    let storage = []
    for (var list in lists) {
        let current = lists[list]
        while (current) {storage.push(current.val);current = current.next}
    }    
    let sorted = storage.sort((a, b) => {return a - b})
    let newList = new ListNode(sorted[0])
    if (sorted.length === 0) { return null}
    // if (sorted.length === 1) { return newList}
    for (var i = 1; i < sorted.length; i++) {
        let current = newList
        while(current.next) { current = current.next }
        let newNode = new ListNode(sorted[i])
        current.next = newNode
    }
    return newList
};