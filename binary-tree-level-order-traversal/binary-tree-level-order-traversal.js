/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root, depth = 0, groups = []) {
    if (!root) { return groups }
    if (!groups[depth]) { groups[depth] = [root.val] } 
    else { groups[depth].push(root.val) }
    levelOrder(root.left, depth+1, groups)
    levelOrder(root.right, depth+1, groups)
    return groups
};