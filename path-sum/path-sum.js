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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false 
    if (targetSum === undefined) return false 
    let matches = false

    const btTraversal = (root, tracker) => {
        if (!root) return 
        if (!root.left && !root.right) {
            if (tracker + root.val === targetSum) matches = true 
            return tracker
        }
        btTraversal(root.left, tracker + root.val)
        btTraversal(root.right, tracker + root.val)
        // iterate over the bst 
        // for each node in the value 
        // determine if it is a leaf 
        // if left and right are undefined 
        // if the target is a leaf
        // make a comparison 
        // if it is not a leaf
        // keep iterating 
    }
    btTraversal(root, 0)
    
    return matches === true ? true : false 

    
     
    
};