/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const traverseBT = (head, container) => {
        if (!head) {container.push('null'); return container}
        container.push(head.val)
        container.push(...traverseBT(head.left, []))
        container.push(...traverseBT(head.right, []))
        return container
    }
    let treeOne = traverseBT(p, [])
    let treeTwo = traverseBT(q, [])
    if (treeOne.length !== treeTwo.length) return false 
    for (var i = 0; i < treeOne.length; i++) {
        if (treeOne[i] !== treeTwo[i]) return false
    }
    return true 
};