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
var goodNodes = function(root) {
    let goodNodes = 0
    let traverse = (node, path = []) => {
        if (!node) return 
        path.push(node.val)
        if (node.left) {traverse(node.left, path)}
        if (node.right) {traverse(node.right, path)}
        for (var num of path) {if (num > node.val){path.pop();return}}  
        path.pop()    
        goodNodes+=1
    }
    traverse(root)
    return goodNodes
};