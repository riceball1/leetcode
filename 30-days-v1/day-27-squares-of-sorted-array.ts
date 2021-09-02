// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * Given an integer array nums sorted in non-decreasing order, return 
 * an array of the squares of each number sorted in non-decreasing order.
 */

// naive approach - using O(n) time complexity and O(n) space complexity
 function sortedSquaresBruteForce(nums: number[]): number[] {
    // bruteforce
    const sortedSquaredNumsArray = [];
    for(let i = 0; i < nums.length; i++) {
        sortedSquaredNumsArray.push(nums[i] * nums[i]);
    }
    return sortedSquaredNumsArray.sort((a, b) => a - b);
};

