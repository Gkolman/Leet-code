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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let values =[]
    const btTraversal = (head) => {
        if (!head) {return []}
        btTraversal(head.left)
        btTraversal(head.right)
        values.push(head.val)
        return values
    }
    return btTraversal(root)
};

/*
I: a bt 
O: an array that contains the values of the bt in "postorder" traversal
C: -100 <= Node.val <= 100
E: root could be null 

*/