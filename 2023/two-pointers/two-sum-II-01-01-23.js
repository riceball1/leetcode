// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Time Complexity: O(n) linear time
// Space Complexity: O(1) two pointer method

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // use two pointer method to get O(1) space
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right) {
        // calculate the sum 
        let sum = numbers[left] + numbers[right];
        // check if the sum is correct
        // add 1 to each left and right since indexed starting at 1
        if(sum === target) return [left + 1, right + 1]
        // otherwise check whether to decrement left or right
        if(target < sum) {
            right--;
        } else {
            left++;
        }
    }
};

// Test Cases
console.log(twoSum([2,7,11,15], 9), [1, 2])
console.log(twoSum([2,3,4], 6), [1, 3])
console.log(twoSum([-1, 0], -1), [1, 2])