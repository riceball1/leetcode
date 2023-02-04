// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    // identify which side the p and q lies on
    let max = Math.max(p.val, q.val), min = Math.min(p.val, q.val)
    
    // check if either one is the root val
    if(root.val == min || root.val == max)    return root
    
    // check if the current root value is less than max and greater than min, then we know it is the lowest common ancestor
    if(root.val < max && root.val > min)  return root
    
    // otherwise traverse again to find the lowest common ancestor
    return lowestCommonAncestor(min > root.val ? root.right : root.left, p, q)
     
 };