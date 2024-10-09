// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length === 0) return;
       
       let left = 0;
       
       for (let right = 0; right < nums.length; right++) {
           if (nums[right] != 0) {
               nums[left] = nums[right];
               left++;
           }
       }
   
       for (let i = left; i < nums.length; i++) {
           nums[i] = 0;
       }
   };