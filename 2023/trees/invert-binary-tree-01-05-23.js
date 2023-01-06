// https://leetcode.com/problems/invert-binary-tree/

// Given the root of a binary tree, invert the tree, and return its root.

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
 * @return {TreeNode}
 */
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root; // base case

    // while there's a left and right we swap
    const rootRight = root.right
    const rootLeft = root.left
    // since the current root we don't mess with, we just want to only switch the left and right
    root.right = rootLeft
    root.left = rootRight

    // traverse again
    invertTree(root.right)
    invertTree(root.left)

    // remember to return the root after the swapping is done
    return root;
};