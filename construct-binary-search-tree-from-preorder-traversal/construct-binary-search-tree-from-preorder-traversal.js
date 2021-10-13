/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

let insert = (tree, val) => {
    let newNode = new TreeNode(val)
    if (!tree) return newNode
    if (val < tree.val) {
        if (tree.left) {insert(tree.left, val)}
        else (tree.left = newNode)
    } else {
        if (tree.right) {insert(tree.right, val)}
        else (tree.right = newNode)
    }
    return tree 
}

var bstFromPreorder = function(preorder) {
    let tree = null
    for (var num of preorder) {
        if (!tree) tree = insert(tree, num)
        else {insert(tree, num)}
    }
    return tree

};