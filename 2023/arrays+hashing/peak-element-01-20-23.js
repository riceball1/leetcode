// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Time Complexity O(n) Space O(1)
var findPeakElementLinear = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[ i ] > nums[ i + 1 ]) {
            return i;
        }
    }
    return nums.length - 1;
};

// Time Complexity: O(log n) Space O(1)
function findPeakElementBinary(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((right + left) / 2)
        // use binary search to identify the value that is the peak

        // when the current number is greater than 
        // it's neighbor, then we want to close the right side
        if (nums[ mid ] > nums[ mid + 1 ]) {
            right = mid
        } else {
            // otherwise we want to close the left side
            left = mid + 1;
        }
    }

    return left;
} 