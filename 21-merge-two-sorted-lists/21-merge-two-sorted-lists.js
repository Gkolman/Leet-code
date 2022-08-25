var mergeTwoLists = function(list1, list2) {
    let storage = []
    let current = list1
    while (current) { storage.push(current.val); current = current.next}
    current = list2
    while (current) { storage.push(current.val); current = current.next}
    let sorted = storage.sort((a,b) => {return a - b})
    // console.log(sorted)
    let newList = sorted.length > 0 ? new ListNode(sorted[0]) : null
    for (var i = 1; i < sorted.length; i++){
        let current = newList
        while (current.next) { current = current.next}
        if (current) { current.next = new ListNode(sorted[i]) } 
    }
    return newList
};