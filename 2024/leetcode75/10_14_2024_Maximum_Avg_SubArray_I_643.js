// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if (nums.length === 1 && k === 1) {
        return nums[0]
    }

    // get the initial sum of k length
    let initialSum = 0;
    for (let i = 0; i < k; i++) {
        initialSum += nums[i]
    }

    // Assign maxAverage to the initial average
    let maxAverage = initialSum / k;

    // Sliding window
    let currentSum = initialSum;
    for (let i = k; i < nums.length; i++) {
        // Slide the window by subtracting the element going out and adding the element coming in
        currentSum = currentSum - nums[i - k] + nums[i];

        // Update maxAverage with the new average
        maxAverage = Math.max(maxAverage, currentSum / k);
    }

    return maxAverage
};