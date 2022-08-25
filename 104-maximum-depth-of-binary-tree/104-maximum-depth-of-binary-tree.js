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

var maxDepth = function(root) {
    let leftDepth = 0
    let rightDepth = 0
    const bstTraversal = (currentNode, currentDepth) => {
        if (!currentNode) {return currentDepth -1}
        leftDepth = Math.max(leftDepth, bstTraversal(currentNode.left,currentDepth+1))
        rightDepth = Math.max(rightDepth, bstTraversal(currentNode.right,currentDepth+1))        
        return Math.max(leftDepth,rightDepth)
    }
    return bstTraversal(root,1)
};

