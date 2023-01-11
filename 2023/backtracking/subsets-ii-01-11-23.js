//https://leetcode.com/problems/subsets-ii/
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Time: O(n)
Space: O(n) call stack
 */

var subsetsWithDup = function(nums) {
    const result = [];
    // for each number, we have to decide whether to include or not
  
    // [1,2,2,2] --> 
    nums.sort((a,b) => a-b); // sort in ascending order
    let subset = []; 
    function backtrack(index) {
      if (index === nums.length) { // [1, 2, 3] --> [2, 3, 1]   
        result.push([...subset])
        return;
      }
  
      // make our decision
  
      // include this number 
      subset.push(nums[index]);
      backtrack(index+1); 
      subset.pop(); // remove the number
  
      // not including the number
      // skip over all duplicates of nums[index]
      while (index < nums.length && nums[index] == nums[index+1]) {
        index += 1 
      }

      // backtrack again without the duplicate numbers
      backtrack(index+1); 
  
    }
    backtrack(0);
    return result;
  };
  
  console.log(subsetsWithDup([1, 2, 2]))