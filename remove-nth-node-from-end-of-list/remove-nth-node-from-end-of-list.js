/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    // iterate over the list 
    let pointer1 = head
    let listLength = 0 
    // get the length of the list 
    // find out what the length - n. is 
    while (pointer1) {
        listLength += 1
        pointer1 = pointer1.next 
    }
//     if (listLength === 1) {
//         if (n === 1) { return null}
//     } else if (listLength === 2) {
//         if (n === 1) {head.next = null; return head}
//         if (n === 2) { return head.next}
//     } else if (listLength === 3) {
//         if (n === 1) {head.next.next = null; return head}
//         if (n === 2) {head.next = head.next.next; return head}
//         if (n === 3) { return head.next}

//     }
    pointer1 = head 
    let tracker = listLength 
    let prev = pointer1
    let current = pointer1;
    let next = pointer1
    
    if (!head.next && n === 1 ) return null 
    // console.log(listLength)
    while (current) {
        console.log('tracker',tracker)
        if (tracker === n ) {
            if (prev == next) {head.next === null; return head.next }
            prev.next = next 
            return head 
            console.log('prev.next',prev.next)
            console.log('next',next)
        } else {
            prev = current
            current = current.next 
            next = current.next 
        }
        tracker-=1
    }
    return head
    // iterate over the lsit again
    // when you get to length - n
    // get the previous pointer and the next pointer 
    // make current null and assign previous .next to equal next 
    
    
    
};