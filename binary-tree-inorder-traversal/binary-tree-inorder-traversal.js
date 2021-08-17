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
var inorderTraversal = function(root) {
    let values = []
    const btTraversal = (head) => {
        if (!head) {return []}
        btTraversal(head.left)
        values.push(head.val)
        btTraversal(head.right)
     return values    
    }
    return btTraversal(root)
};

/*
I: binary tree  
O: an array containing the values of the bt in "inorder" traversal 
C:-100 <= Node.val <= 100
E: root could be null 


*/