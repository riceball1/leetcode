// https://leetcode.com/problems/arithmetic-slices/


/*

An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

*/




/**
 * @param {number[]} nums
 * @return {number}
 */

// Time O(n^2) 
const numberOfArithmeticSlices = function (nums) {

    // edge case
    if (nums.length <= 2) return 0;

    let numOfArithmeticSubarrays = 0;
    let subArrayLength = 2;
    for (let startIndex = 0; startIndex < nums.length - 2; startIndex++) {
        // initial difference
        const diff = nums[ startIndex + 1 ] - nums[ startIndex ]
        for (let endIndex = startIndex + 1; endIndex < nums.length - 1; endIndex++) {
            // check if the difference is equal to the initial difference
            const currDiff = nums[ endIndex + 1 ] - nums[ endIndex ]


            if (currDiff === diff) {
                // found a sequence
                subArrayLength++;
                if (subArrayLength >= 3) {
                    numOfArithmeticSubarrays += 1;

                }
            } else {
                // reset subArrayLength to 2
                subArrayLength = 2;
                break;
            }
        }
    }


    return numOfArithmeticSubarrays;


};




/**
 * @param {number[]} nums
 * @return {number}
*/

// Time O(n) and Space O(n)
// This function takes an array of integers as input and returns the number of arithmetic slices.
const numberOfArithmeticSlicesDP = function(nums) {
    // Initialize an array `dp` with the same length as `nums`, 
    // and fill it with zeros. This array will keep track of the calculations.
    let dp = new Array(nums.length).fill(0);
    // Initialize a variable `count` to keep track of the total number of arithmetic slices.
    let count = 0;
    
    // Loop through the array starting from index 2.
    for (let i = 2; i < nums.length; i++) {
        // Check if the current sequence of 3 numbers form an arithmetic sequence.
        if (nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) {
            // If the current sequence is an arithmetic sequence, update the `dp` array at index `i`.
            dp[i] = dp[i-1] + 1; 
            // Add the current value of `dp[i]` to the `count` variable to keep track of the total number of arithmetic sequences.
            count += dp[i];
        }
    }
    // Return the total number of arithmetic sequences.
    return count;
};
