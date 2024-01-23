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
var longestUnivaluePath = function(root) {
    
    let longestPath = 0
    if (!root) { return longestPath }
    const traversPath = (head, currentValue) => {
        if (!head) { return 0 }
        let leftDepth = 0
        let rightDepth = 0
        if (head.left && head.left.val === currentValue) {
            leftDepth += 1
            leftDepth += traversPath(head.left, currentValue)
        }
        if (head.right && head.right.val === currentValue) {
            rightDepth += 1
            rightDepth += traversPath(head.right, currentValue)            
        }
        let depth = leftDepth + rightDepth
        longestPath = Math.max(longestPath, depth)
        return Math.max(leftDepth, rightDepth)
    }
    
    const traverseGraph = (head) => {
        if (!head) { return }
        traverseGraph(head.left)
        traverseGraph(head.right)
        traversPath(head, head.val)
    }
    traverseGraph(root)
    return longestPath
};

/*
    
    5
  4,  5,
 1, 1   5
    
*/