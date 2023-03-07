// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Input: nums = [1,1]
Output: [2]

*/

function findDisappearedNumbers(nums: number[]): number[] {
  let result: number[] = [];
  // add the value to the set so that only the unique values from 1 - n is there
  let numsSet = new Set(nums);

  // iterate from 1 - n to see if the num is in the set
  for (let i = 1; i <= nums.length; i++) {
    // if num is not in the set then we need to add to result
    if (!numsSet.has(i)) {
      result.push(i);
    }
  }

  return result;
}
