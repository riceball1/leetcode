// https://leetcode.com/problems/rotate-array/

// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // use with O(n) time complexity and O(n) space
    let newRotatedNumsArray = [];
    for(let i = 0; i < nums.length; i++) {
     
            const newIndex = (i + k) % (nums.length);
            newRotatedNumsArray[newIndex] = nums[i]
    }
    
    // this copies each element from the newRotatedNumsArray to the nums
    // by doing this would be an O(n^2) operation
    for (let j = 0; j < nums.length; j++) {
        nums[j] = newRotatedNumsArray[j]
    }
};