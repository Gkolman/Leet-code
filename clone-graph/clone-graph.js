/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

    let newGraph = {}
    return traverse(node)
    function traverse(node) {
        if (!node) return node 
        if (!newGraph[node.val]) {
            newGraph[node.val] = new Node(node.val)
            newGraph[node.val].neighbors = node.neighbors.map(cv => traverse(cv))
        }
        return newGraph[node.val]
    }
};