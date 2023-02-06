# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    leftList = []
    rightList = []
    
    while list1 do
        leftList.push(list1.val)
        list1 = list1.next
    end
    while list2 do
        rightList.push(list2.val)
        list2 = list2.next
    end
    i = 0
    result = []
    while leftList.length > 0 && rightList.length > 0
        if leftList[0] < rightList[0]
            result.push(leftList.shift)    
        else
            result.push(rightList.shift)
        end
    end
    
    while leftList.length > 0 do
        result.push(leftList.shift)
    end
    
    while rightList.length > 0 do
        result.push(rightList.shift)
    end
    result
end