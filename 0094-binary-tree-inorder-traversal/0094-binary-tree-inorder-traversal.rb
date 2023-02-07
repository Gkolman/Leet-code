# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer[]}
def inorder_traversal(root, result = [])
    return result unless root
    inorder_traversal(root.left, result)
    result.push(root.val)
    inorder_traversal(root.right, result)
    result
end