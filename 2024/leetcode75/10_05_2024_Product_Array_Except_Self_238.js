// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftSideProduct = 1; // accumulate all the products from the left side
    let rightSideProduct = 1; // accumulate all the products from the right side
    const result = new Array(nums.length).fill(1);

    // first pass to get the left side product
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftSideProduct;
        leftSideProduct *= nums[i];
    }

    // second pass to get the right side product
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightSideProduct;
        rightSideProduct *= nums[i]
    }

    return result;

};