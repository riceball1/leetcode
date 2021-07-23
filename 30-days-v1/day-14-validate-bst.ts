// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * 
 * Given the root of a binary tree, determine if it is a
 *  valid binary search tree (BST).
 * 
 * A valid BST is defined as follows:
 * 
 * The left subtree of a node contains only nodes with keys less 
 * than the node's key. The right subtree of a node contains only 
 * nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function isValidBST(root: TreeNode | null): boolean {

    function validate(node, left, right) {
        // An empty node is a valid BST
        if (node === null) {
            return true;
        } 
        // if the left or right is not equal then not BST
        if (!(node.val < right && node.val > left)) {
            return false;
        }
        // recursively checks if the node is valid
        return (validate(node.left, left, node.val) && validate(node.right, node.val, right))
    }
    
    // uses negative and positive infinity since the root could 
    // be anything but should be bounded within these two values
    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);  
};

/**
 * Notes:
 * 
 * I understand how the binary tree structure works, 
 * that they separate values, with left side smaller value than
 * the parent node, and then on the right is greater value
 * 
 * 
 */