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
def is_same_tree(p, q, valid = true)
    if valid == false 
        return valid
    elsif p == nil && q == nil
        return valid
    elsif p && q == nil || p == nil && q
        return valid = false
    elsif p.val != q.val
        return valid = false
    end
    if !(is_same_tree(p.left, q.left, valid)) || !(is_same_tree(p.right, q.right, valid))
        false
    else
        true
    end
end