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

var levelOrder = function(root) {
    
    let values = []
    const btTraversal = (head, currentDepth) => {
        if (!head) {return []}
        btTraversal(head.left,currentDepth+ 1)
        btTraversal(head.right,currentDepth+ 1)
        if (!values[currentDepth - 1]) {values[currentDepth -1] = [head.val]}
        else {values[currentDepth - 1].push(head.val)}
        return values
    }
    return btTraversal(root,1)
};

/*
I: a binary tree 
O: an two dimensional array of the values of each level in the tree from left to right 
C:-1000 <= Node.val <= 1000
E: root could be null 
*/