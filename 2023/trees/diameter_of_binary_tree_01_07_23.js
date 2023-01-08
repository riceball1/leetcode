// https://leetcode.com/problems/diameter-of-binary-tree/

/*

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (!root) return 0;
    // keep track of the diameter in an outside variable
    let diameter = 0;
    dfs(root)
    return diameter;

    // use recursion to traverse the binary tree
    function dfs(node) {
        if (!node) return 0;

        // find the height of right side
        const right = dfs(node.right);
        // find heigh of left side
        const left = dfs(node.left);

        // once we've gone down one path for one side
        // we can check to see if they total to the max diameter
        diameter = Math.max(diameter, left + right);
        // we want to add 1 to each node path we cross
        return Math.max(right, left) + 1;
    }

};