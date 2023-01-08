// https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is height-balanced

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.


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
var isBalanced = function(root) {
    let isBalancedTree = true; // set a result
    dfs(root)
    return isBalancedTree;

    function dfs(tree) {
        if(!tree) return 0; // counting the depth
        const left = dfs(tree.left) // traverse down left path
        const right = dfs(tree.right) // traverse down right path

        // Check if left and right are off by more than 1
        if(Math.abs(left - right) > 1) {
            isBalancedTree = false; 
        }

        return Math.max(left, right) + 1 // get the greatest depth 
    }
};