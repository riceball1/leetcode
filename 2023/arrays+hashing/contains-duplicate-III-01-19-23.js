// https://leetcode.com/problems/contains-duplicate-iii/description/

/*
Prompt:
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.

Example:
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

*/

// Brute Froce approach O(n^2) time and O(1) space
/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length, i, j, num;
  for (i = 0; i < len; i++) {
      num = nums[i];
      // Check each value in the window for a match to num
      for (j = 1; j <= k; j++) {
          if (Math.abs(nums[i + j] - num) <= t) return true;
      }
  }
  return false;
};