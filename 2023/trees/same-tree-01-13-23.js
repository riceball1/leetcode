// https://leetcode.com/problems/same-tree/

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
var isSameTree = function (p, q) {
    // base cases
    if (!p && !q) return true; // both are none
    if (!p || !q) return false; // one is none

    const curr = p.val === q.val; // check if vals equal

    let left = curr && isSameTree(p.left, q.left)
    let right = curr && isSameTree(p.right, q.right)
 
    // keep iterating and determining if all layers are equal
    return left && right;
};