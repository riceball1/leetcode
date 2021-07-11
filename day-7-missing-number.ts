// https://leetcode.com/problems/missing-number/

/**
 * Given an array nums containing n distinct numbers in 
 * the range [0, n], return the only number in the range 
 * that is missing from the array.
 * Follow up: Could you implement a solution using 
 * only O(1) extra space complexity and O(n) runtime complexity?
 */


 function missingNumber(nums: number[]): number {
    // find the min and max of the nums array
    // if there is any gap between the nums then find the missing value in between
    // if the min and max has no gap, then find the next max
    
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    
    if (max - min === 0) {
        // there is no gap between the min and max
        return max + 1;
    } else {
        // there is a gap between the min and max
        for(let i = 0; i < max; i++) {
            // iterate over and see if that value is included in an the nums array
            if (!nums.includes(i))  {
                return i;
            }
        }
    }
};