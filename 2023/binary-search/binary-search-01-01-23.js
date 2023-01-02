// https://leetcode.com/problems/binary-search/

/**
 * 
 * Prompt:
 Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // use two pointers for binary search
    let left = 0;
    let right = nums.length - 1;

    // keep iterating while left and right do not overlap
    while(left < right) {
        // check the middle to determine if that is where the target value is
        let middle = Math.floor((left + right) / 2) // we use Math.floor to round the number down to a whole number
        if(nums[middle] === target) {
            // if we found the target return the index
            return middle;
        }

        // if not in the middle, let's adjust the left or right values
        if(target < middle) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    // if no value was found
    return -1;
};

// Test Cases
console.log(search([-1,0,3,5,9,12], 9), 4)
console.log(search([-1,0,3,5,9,12], 2), -1)