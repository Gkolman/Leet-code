# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} p
# @param {TreeNode} q
# @return {Boolean}
def is_same_tree(p, q)
    if p == nil && q == nil
        return true
    elsif p && q == nil || p == nil && q
        return false
    elsif p.val != q.val
        return false
    end
    if !(is_same_tree(p.left, q.left)) || !(is_same_tree(p.right, q.right))
        false
    else
        true
    end
end