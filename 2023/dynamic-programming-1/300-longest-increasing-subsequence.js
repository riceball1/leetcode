// https://leetcode.com/problems/longest-increasing-subsequence/


/**
 * 
 * I learned that there is O(n^2) and O(n log n) approach, below
 * is the approach derived from GeeksForGeeks, but cleaned up 
 * to make it more human readable
 */


// This program finds the length of the longest increasing subsequence
// in an array using an algorithm that runs in O(n log n) time.

// This function uses binary search to find the index of the smallest
// element in the given array that is greater than or equal to the given key.
// It is used by the LongestIncreasingSubsequenceLength function below.
function CeilIndex(array, left, right, key) {
    while (right - left > 1) {
      var middle = left + parseInt((right - left) / 2);
      if (array[middle] >= key)
        right = middle;
      else
        left = middle;
    }
  
    return right;
  }
  
  // This function returns the length of the longest increasing subsequence
  // in the given array.
  function LongestIncreasingSubsequenceLength(array, size) {
    // Add boundary case when the array size is one.
    var tailTable = Array(size).fill(0);
    var length = 1; // always points to an empty slot
    tailTable[0] = array[0];
  
    for (var i = 1; i < size; i++) {
      if (array[i] < tailTable[0])
        // The new value is smaller than the smallest value we've seen.
        // Replace the smallest value with the new value.
        tailTable[0] = array[i];
  
      else if (array[i] > tailTable[length - 1])
        // The new value wants to extend the largest subsequence we've seen so far.
        // Append the new value to the end of the tailTable.
        tailTable[length++] = array[i];
  
      else
        // The new value wants to be the current end candidate of an existing subsequence.
        // Replace the ceil value in tailTable with the new value.
        tailTable[CeilIndex(tailTable, -1, length - 1, array[i])] = array[i];
    }
  
    return length;
  }
  
  // Driver program to test the LongestIncreasingSubsequenceLength function.
  var array = [2, 5, 3, 7, 11, 8, 10, 13, 6];
  var length = LongestIncreasingSubsequenceLength(array, array.length);
  console.log(length) // 5
  