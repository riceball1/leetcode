// https://leetcode.com/problems/maximum-product-subarray/


/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 * 
 * This https://leetcode.com/problems/maximum-product-subarray/solutions/416395/javascript-solution-w-explanation/?orderBy=most_votes&languageTags=javascript has a solution and explanation
 */
var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let minProduct = nums[0]
    let maxProduct = nums[0]
    let answer = nums[0];
    // The problem must account for negative numbers

    for(let i = 1; i < nums.length; i++) {

        // calculate new min and max
        let newMin = Math.min(nums[i] * minProduct, nums[i] * maxProduct);
        let newMax = Math.max(nums[i] * maxProduct, nums[i] * minProduct);

        // update the prev min and max
        minProduct = Math.min(newMin, nums[i])
        maxProduct = Math.max(newMax, nums[i])

        // update answer
        answer = Math.max(answer, maxProduct)
    }

    return answer;
};

console.log(maxProduct([2,3,-2,4])) // 6
console.log(maxProduct([-2,0,-1])) // 0