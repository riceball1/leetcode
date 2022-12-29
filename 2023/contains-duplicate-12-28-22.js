/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Time: O(n) - n = nums in the nums array
 * Space = O(n) - nums stored in map
 * 
 */

/*
Prompt
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


*/

var containsDuplicate = function(nums) {
    // Use a map object to keep track of the already seen values
    const trackValues = new Map();

    // Use a for-loop to iterate over the nums array once
    for(let i = 0; i < nums.length; i++) {
        // check if there has been any duplicate values, if so return true
        if(trackValues.get(nums[i])) {
            return true;
        } else { // otherwise no duplicate, add to the map object to keep track
            trackValues.set(nums[i], 1)
        }
    }

    // return false if no duplicates were found
    return false;
    
};