// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/*

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Input: root = [3,1,4,null,2], k = 1
Output: 1

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -Infinity;
  let kthSmallestVal = -Infinity;
  let count = 0;
  traverseInorder(root);

  return kthSmallestVal;

  function traverseInorder(node: TreeNode | null) {
    if (!node) return;
    traverseInorder(node.left);
    count++;

    if (count === k) {
      kthSmallestVal = node.val;
      return;
    }
    traverseInorder(node.right);
  }
}

/*

          5
        /   \
       3     8
      / \   /
     2   4 6
           \
           10

*/

let tree = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2), new TreeNode(4)),
  new TreeNode(8, new TreeNode(6, new TreeNode(10)))
);

const test = kthSmallest(tree, 2); // 3

console.log(test);
