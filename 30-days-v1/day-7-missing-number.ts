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


/**
 * Issues with first attempt, did not meet the testcase [0,1]
 * because in this situation, using Max - Min would result in 1, which is not == 0
 * so instead of using that to test for gap, I should consider if adding 1 to the min 
 * would result in the max, if not then there's a gap
 */

 function missingNumberAttempt2(nums: number[]): number {
    // find the min and max of the nums array
    // if there is any gap between the nums then find the missing value in between
    // if the min and max has no gap, then find the next max
    
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    
    // take into account there is only one value, 
    // and means it should return that value + 1;
    if(nums.length === 1) {
        return nums[0] + 1;
    }
    
    if (min + 1 === max) {
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

/**
 * Another test case not taken into account is that the values should always start
 * at 0, then increment up, so for example if its [1], then it would be missing 0,
 * and for [2] then it would mean it is missing 1
 */


 function missingNumberAttemptThree(nums: number[]): number {
    // find the min and max of the nums array
    // if there is any gap between the nums then find the missing value in between
    // if the min and max has no gap, then find the next max
    
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    
    // take into account there is only one value, 
    // and means it should return that value + 1;
    if (nums.length === 1) {
            if(nums[0] === 0) {
        return 1;
    } else if (nums[0] === 1) {
        return 0;
    }
    }

    
    if (min + 1 === max && min === 0) {
        // there is no gap between the min and max
        return max + 1;
    } else {
        // there is a gap between the min and max
        for(let i = 0; i <= max; i++) {
            // iterate over and see if that value is included in an the nums array
            if (!nums.includes(i))  {
                return i;
            }
        }
        // return max + 1 because it's the end of the range
        return max + 1;
    }
};