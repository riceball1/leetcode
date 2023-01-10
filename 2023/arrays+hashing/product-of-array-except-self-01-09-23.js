// https://leetcode.com/problems/product-of-array-except-self/


/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

example 1
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Constraints:
2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let product = 1;
    let beforeTargetProducts = [ 1 ];
    for (let i = 1; i < nums.length; i++) {
        product *= nums[ i - 1 ]
        beforeTargetProducts[ i ] = product;
    }

    // Second Pass - Numbers After
    product = 1;
    let numsAfterTarget = Array(nums.length).fill(1);
    for (let i = nums.length - 1; i > 0; i--) {
        product *= nums[ i ]
        numsAfterTarget[ i - 1 ] = product;
    }

    for (let i = 0; i < nums.length; i++) {
        beforeTargetProducts[ i ] = beforeTargetProducts[ i ] * numsAfterTarget[ i ]
    }

    // Attempt 1 to optimize without needing 3 loops
    // O(1) space 
    // product = 1;
    // for(let i = nums.length - 1; i >= 0; i--) {
    //   beforeTargetProducts[i] *= product;
    //   product *= nums[i];
    // } 

    return beforeTargetProducts
};


// Test Cases
console.log(productExceptSelf([ -1, 1, 0, -3, 3 ]), [ 0, 0, 9, 0, 0 ])
console.log(productExceptSelf([ 1, 2, 3, 4 ]), [ 24, 12, 8, 6 ])