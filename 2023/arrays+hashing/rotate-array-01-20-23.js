// https://leetcode.com/problems/rotate-array/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Time: O(n)
// Space: O(1)
function rotate(nums, k) {
    let key = k % nums.length;

    reverse(nums, 0, nums.length - 1); // reverse entire array
    reverse(nums, 0, key - 1) // rotate array by key
    reverse(nums, key, nums.length - 1) // reverse rest of the array after the key

    // this function helps to swap the values
    function reverse(nums, start, end) {
        while(start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++;
            end--;
        }
    }

};