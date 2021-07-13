// https://leetcode.com/problems/same-tree/

/**
 * Given the roots of two binary trees p and q, write a
 * function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally
 * identical, and the nodes have the same value.
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // given the fact that the two inputs are arrays
  // need to check based on the values inside
  // used JSON.stringfy to ensure that even tho the pointers to the different
  // elements may not be exactly the same, we want to just check that the
  // values are the same

  // runtime 104ms
  // memory 40.3 MB
  return JSON.stringify(p) == JSON.stringify(q);
}
