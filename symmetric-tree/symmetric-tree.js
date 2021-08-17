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
 * @return {boolean}
 */
var isSymmetric = function(root) {    
    let depthValues = []
    const getDepthValues = (head, currentDepth) => {
        if (!head){
            if (!depthValues[currentDepth - 1]) {depthValues[currentDepth - 1] = ['null']} 
            else {depthValues[currentDepth - 1].push('null')}  
            return 
        }
            getDepthValues(head.left,currentDepth+1)
            getDepthValues(head.right,currentDepth+1)
            if (!depthValues[currentDepth - 1]) {depthValues[currentDepth -1] = [head.val]}
            else {depthValues[currentDepth - 1].push(head.val)}
    }
    getDepthValues(root, 1)
        for (var row of depthValues) {
        for (var l = 0, r = row.length - 1; l < r; l++, r--) {
            if (row.length % 2 === 1 || row.length === 1) return false 
            if (row[l] !== row[r]) return false 
        }
    }
    return true     
};

/*


I: bt 
O: a boolean determining whether or not the binary tree is a symmetrical 
C: -100 <= Node.val <= 100
E: 

*/