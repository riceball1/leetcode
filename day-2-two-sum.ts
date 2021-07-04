// https://leetcode.com/problems/two-sum/

/**
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up 
 * to target. You may assume that each input would have 
 * exactly one solution, and you may not use the same element 
 * twice.
 * 
 * You can return the answer in any order.
 */


// attempt one - doesn't pass all tests
function twoSum(nums: number[], target: number): number[] {
    // initialize the return value as an empty array
    let indices = [];


    /**
     * There is a difference for when the nums length == 2, this means
     * that we already know there can only be two possible indicies
     * therefore it be easy just to compare these two values
     */
    if (nums.length === 2) {
        const sum = nums[0] + nums[1];
        if (sum === target) {
            indices = [0, 1]
        }
        return indices;
    }
    
    /**
     * I used two for-loops thinking they will help me compare each element 
     * I was able to find the sum of each adjacent element and then compare that
     * to the target value, and find the indicies this way
     */
    for(let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let sum = nums[i] + nums[j + 1] 
            if (sum === target) {
                indices = [i, j + 1];
            }
        }
    }
    
    return indices;
};


// attempt two

function twoSumAttemptTwo(nums: number[], target: number): number[] {
    // use a hash map
    let numsIndicies = {}


    
    return [];
}
