// https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75


 /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // calculate the current area
        let currentHeight = Math.min(height[left], height[right])
        let width = right - left;
        let area = currentHeight * width


        // update maxArea if we found a larger one
        maxArea = Math.max(maxArea, area)

        // move the pointer with the shorter height
        height[left] < height[right] ? left++ : right--;

    }
    return maxArea

};

// Time complexity: O(n)
// Space complexity: O(1)

// Test cases
// 1. height = [1,8,6,2,5,4,8,3,7] => 49
// 2. height = [1,1] => 1
// 3. height = [4,3,2,1,4] => 16