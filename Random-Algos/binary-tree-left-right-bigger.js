

/*
Suppose you're given a binary tree represented as an array.
For example, [3,6,2,9, -1, 10] represents the following binary tree (where -1 is a non-existent node):

           3 
        /     \
      6         2
     /         /
    9        10

Write a function that determines whether the left or right branch of the tree is larger. The size of each branch is the sum of the node values. The function should return the string "Right" if the right side is larger and "Left" if the left side is larger. If the tree has 0 nodes or if the size of the branches are equal, return the empty string.
Example Input:
13,6,2,9, -1, 10]
Example Output:
Left
*/

/*

- each level of the tree is incremented by 1, starts at 1
- first level = 3 (root: always 1 node); 2nd level = 6, 2 (max possible: 2 nodes); 3rd level = 9, -1, 10 (max possible 4 nodes)

*/


function binaryTreeBranches(arr) {
  // Define a recursive helper function to calculate the sum of a subtree
  function subtreeSum(nodeIndex) {
    if (nodeIndex >= arr.length || arr[nodeIndex] === -1) {
      return 0; // Node doesn't exist or is a leaf node
    }
    const leftIndex = 2 * nodeIndex + 1;
    const rightIndex = 2 * nodeIndex + 2;
    return arr[nodeIndex] + subtreeSum(leftIndex) + subtreeSum(rightIndex);
  }

  // Calculate the sums of the left and right branches
  const leftSum = subtreeSum(1); // Root node has index 0, so left branch starts at index 1
  const rightSum = subtreeSum(2); // Right branch starts at index 2

  // Compare the sums and return the appropriate string
  if (leftSum > rightSum) {
    return "Left";
  } else if (rightSum > leftSum) {
    return "Right";
  } else {
    return "";
  }
}


console.log(binaryTreeBranches([13,6,2,9, -1, 10])) // Left
console.log(binaryTreeBranches([3,6,2,9, -1, 10])) // Left