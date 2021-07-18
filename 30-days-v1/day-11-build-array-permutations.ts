// https://leetcode.com/problems/build-array-from-permutation/


/**
 * Given a zero-based permutation nums (0-indexed), 
 * build an array ans of the same length where ans[i] = nums[nums[i]] 
 * for each 0 <= i < nums.length and return it.
 * 
 * A zero-based permutation nums is an array of distinct 
 * integers from 0 to nums.length - 1 (inclusive).
 */

/**
 * 
 * Constraints:
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] < nums.length
 * The elements in nums are distinct.
 */

 function buildArray(nums: number[]): number[] {
    const ans = [];
    // loops through once O(n) for time
    // also O(n) for space for the ans array
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    // returns back ans arrray
    return ans;
};




/**
 * Thoughts?
 * 
 * First I'm a bit confused by what's it asking
 * What is a permutation?
 * 
 * def: technique that determines the number of 
 * possible arrangements in a set when the 
 * order of the arrangements matters
 * 
 * 
 * Example 1:
 * Input: nums = [0,2,1,5,3,4]
 * Output: [0,1,2,4,5,3]
 * 
 * Example 2:
 * Input: nums = [5,0,1,2,3,4]
 * Output: [4,5,0,1,2,3]
 * 
 * 
 * Update 7/17/21
 * 
 * After watching a video I realized that it literally was 
 * just taking the value within the array while looping through it and using that
 * as the index and it returns a new array
 * 
 * Is there any better way to make it more efficient than the for loop approach?
 * 
 * Not sure if there be any comparable difference with a map or even foreach
 * 
 */
