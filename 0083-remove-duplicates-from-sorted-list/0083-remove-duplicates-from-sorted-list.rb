# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
    pointer = head
    while pointer&.next
        while pointer.val == pointer&.next&.val
            pointer.next = pointer.next.next
        end
        pointer = pointer.next
    end
    head
end