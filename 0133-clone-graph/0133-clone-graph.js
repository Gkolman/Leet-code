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
var cloneGraph = function(node, result = {}) {
    let traverse = (head) => {
        if (!head) { return head }
        if (!result[head.val]) {
            result[head.val] = new Node(head.val)
            result[head.val].neighbors = head.neighbors.map(n => traverse(n) )
        }
        return result[head.val]
    }
    return traverse(node)
};

/*

iterate over the children
for each children create a new node
generate the children for that node
push the resulting construciton in into the head of the other nodes

*/