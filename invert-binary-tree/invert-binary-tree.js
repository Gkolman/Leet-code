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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    let recurse = (head) => {
        if (!head) return head
        if (head.left) {recurse(head.left)}
        if (head.right) {recurse(head.right)}
        let left = head.left;
        let right = head.right;
        head.left = head.right
        head.right = left 
        return head 
    }
    
     return recurse(root)
    
    
};