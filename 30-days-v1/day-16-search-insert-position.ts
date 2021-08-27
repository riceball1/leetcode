// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Ex1
Input: nums = [1,3,5,6], target = 5
Output: 2

Ex 2
Input: nums = [1,3,5,6], target = 2
Output: 1

**/
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2); // prevents overflow
        
        if(nums[mid] == target) {
            return mid;
        } else {
            if (target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1; 
            }
           
        }
    }
    
    return start;
    
};