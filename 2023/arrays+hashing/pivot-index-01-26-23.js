// https://leetcode.com/problems/find-pivot-index/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // sum up all the values
    const sum = nums.reduce((acculumator, value) => acculumator + value, 0)

    // set a leftSum
    let leftSum = 0;

    // iterate over the nums array
    for(let i = 0; i < nums.length; i++) {
        // calculate the rightSum
        const rightSum = sum - leftSum - nums[i]

        // check if the leftSum and rightSum equals
        if (leftSum === rightSum) {
            return i;
        }

        // if not equal add the current nums to leftSum
        leftSum += nums[i]
    }

    return -1;

    
};
