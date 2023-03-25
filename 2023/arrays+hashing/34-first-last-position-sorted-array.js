// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {

    if(nums.length === 1 && nums[0] === target) return [0,0]

    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        // get middle
        let middle = Math.floor((left + right)/ 2)

        // find target
        if(nums[middle] === target) {
            // while the middle is the target, check if left or right side of it is also the target
            let start = middle
            let end = middle;

            // check that start is still equal to target
            while(nums[start] === target) {
                if(nums[start - 1] == target) {
                    start--;
                } else {
                    break;
                }
            }

            // check that end is still equal to target
            while(nums[end] === target) {
                if(nums[end + 1] == target) {
                    end++;
                } else {
                    break;
                }
            }

            return [start, end]

        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }


    }

    // did not find target
    return [-1, -1]

    
};



// ChatGPT cleaned up above code:

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRangeGPT = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let start = -1;
    let end = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        start = end = mid;
  
        while (start > 0 && nums[start - 1] === target) {
          start--;
        }
  
        while (end < nums.length - 1 && nums[end + 1] === target) {
          end++;
        }
  
        break;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return [start, end];
  };
  

// Test Cases

let nums = [5,7,7,8,8,10] 
let target = 8
// Output: [3,4]