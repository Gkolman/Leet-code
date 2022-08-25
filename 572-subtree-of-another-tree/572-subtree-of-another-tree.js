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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

let treesMatch = (lt, rt,) => {
    let matches = true
    let traverse = (lt,rt) => {
        if (!matches) { return}
        if (!lt && rt) { matches = false; return}
        if (lt && !rt) { matches = false; return}
        if (!lt && !rt) {return} 
        if (lt.val !== rt.val) {matches = false; return}
        traverse(lt.left, rt.left)
        traverse(lt.right, rt.right)
    }
    traverse(lt,rt)
    return matches
}

var isSubtree = function(root, subRoot) {
    let flag = false
    let traverse = (tree, root) => {
        if (flag) {return}
        if (!tree || !root) { return }
        if (treesMatch(tree, root)) {flag = true; return}
        traverse(tree.left, root)
        traverse(tree.right, root)
    }
    traverse(root,subRoot)
    return flag
};

