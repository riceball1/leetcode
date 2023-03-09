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

/*


Follow up prompt:

If the BST is modified often and we need to find the kth smallest value frequently, we can optimize by maintaining additional information in each node. Specifically, we can store the number of nodes in the subtree rooted at each node. Then, when we want to find the kth smallest value, we can use this information to quickly determine which subtree to search next. If k is less than the size of the left subtree of the root, we search for the kth smallest value in the left subtree. If k is greater than the size of the left subtree plus one, we search for the (k - size of left subtree - 1)th smallest value in the right subtree. If k is equal to the size of the left subtree plus one, we return the value of the root. This approach takes O(log n) time to find the kth smallest value, where n is the number of nodes in the BST.



*/

class TreeNodeAlternative {
  val: number;
  left: null | TreeNodeAlternative;
  right: null | TreeNodeAlternative;
  leftCount: number;

  constructor(
    val: number,
    left: null | TreeNodeAlternative = null,
    right: null | TreeNodeAlternative = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.leftCount = 0; // number of nodes in left subtree
  }
}

function insert(root, val) {
  if (!root) {
    return new TreeNodeAlternative(val);
  }
  if (val < root.val) {
    root.left = insert(root.left, val);
    root.leftCount++; // increment left subtree count
  } else {
    root.right = insert(root.right, val);
  }
  return root;
}

function deleteNode(root, val) {
  if (!root) {
    return null;
  }
  if (val < root.val) {
    root.left = deleteNode(root.left, val);
    root.leftCount--;
  } else if (val > root.val) {
    root.right = deleteNode(root.right, val);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      let node = root.right;
      while (node.left) {
        node = node.left;
      }
      root.val = node.val;
      root.right = deleteNode(root.right, node.val);
    }
  }
  return root;
}

function kthSmallestAlternative(root, k) {
  let count = root.leftCount + 1;
  if (k === count) {
    return root.val;
  } else if (k < count) {
    return kthSmallest(root.left, k);
  } else {
    return kthSmallest(root.right, k - count);
  }
}

/*
  With this optimized solution, we can find the kth smallest value in O(log n) time on average, where n is the number of nodes in the tree. The insert and delete operations also take O(log n) time on average, assuming the tree is balanced, so we can efficiently modify the tree as needed.
  */
