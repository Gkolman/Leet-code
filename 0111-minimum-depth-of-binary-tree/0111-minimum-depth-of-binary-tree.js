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
 * @return {number}
 */
var minDepth = function(root) {
    let result = 1000 ** 1000
    if (!root) { return 0 }
    let traverse = (head, depth) => {
        if (!head) { return }
        if (!head.left && !head.right) { result = Math.min(result, depth); return }
        traverse(head.left, depth+1)
        traverse(head.right, depth+1)
    }
    
    traverse(root, 1)
    return result
};