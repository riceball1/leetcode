// https://leetcode.com/problems/binary-tree-level-order-traversal

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let q = [root], ans = [] // use a queue to traverse level order
    while (q[0]) {
        let qlen = q.length, row = []
        for (let i = 0; i < qlen; i++) { // iterate over the nodes at each level by iterating only at the length of the queue
            let curr = q.shift()
            row.push(curr.val) // create the row/level
            // ensure that other nodes are added the queue to be traversed and added to the next level for level order
            if (curr.left) q.push(curr.left) 
            if (curr.right) q.push(curr.right)
        }
        // add the current level traversed to the answer array
        ans.push(row)            
    }
    return ans
}