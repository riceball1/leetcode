// https://leetcode.com/problems/concatenation-of-array/

/**
 * 
 * Given an integer array nums of length n, you want 
 * to create an array ans of length 2n where ans[i] == nums[i] 
 * and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * 
 * Specifically, ans is the concatenation of two nums arrays.
 * 
 * Return the array ans.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    let newArray = [];
    
    for(let i = 0; i < nums.length; i++) {
        newArray[i] = nums[i];
        newArray[i + nums.length] = nums[i];
    }
    
    return newArray;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    return [ ...nums, ...nums]
};


