// https://leetcode.com/problems/maximum-depth-of-binary-tree/

/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/



// Iterative

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
var maxDepth = function (root) {
    if (!root) return 0;
    let depth = 0;
    let stack = [root];

    while (stack.length) {
        // this is the size of the current level
        let size = stack.length;
        // count the depth
        depth += 1;
        // get the other nodes for the next level
        for (let i = 0; i < size; i++) {
            // by pushing only to the certain [i] we can keep the nodes at that level together
            if (stack[i].left) {
                stack.push(stack[i].left)
            }
            if (stack[i].right) {
                stack.push(stack[i].right)
            }
        }
        // essentially removing the level before each time
        // since we do not need to maintain them, we only want to do a count of the depth
        // by removing the previous values it helps to no end up iterating over those nodes 
        stack.splice(0, size)
    }

    // by the end of the iterations should give final deepest depth
    return depth;
}


// Recursive solution

const maxDepthRecursive = (root) => {
    if (!root) return 0;
    /*
        why this works?
        - because during each recursive state it goes down and accumulates 1 on the call stack
        - since we're taking the Math.max() here we will always end up getting the longest path down, and since it would diverge at the point where there's more nodes further along the longest path, we will end up getting the max depth as a result
    */
    return Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right)) + 1
}