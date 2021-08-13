// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
    if (nums.length == 1) return nums[0];
    
    let result = 0;
    let counter = 0;
    
    // for(let i = 0; i < nums.length; i++) {
    //     result += nums[i];
    // }
    
    // while loop counter < nums.length - 1;
    // check that the sum of the results at the first index to the end is greater than the current result
    // other wise keep shifting down and add that index to end up
    // keep doing this until the while loop is broken should be able to get max sum
    
    // while (counter < nums.length - 1) {
    //     for(let i = 0 - counter; i < nums.length)
    // }
    
    return result;
};