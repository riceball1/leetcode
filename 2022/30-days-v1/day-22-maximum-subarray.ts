// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    /**
     To get the O(n) just need to keep track 
     of the subArray that doesn't dip below 0
     if it does then move on to the next item and remove the previous
     sum
    */
    // keep track of the maxSub array
    let maxSub = nums[0];
    let curSum = 0;
    
    for (let n in nums) {
        if (curSum < 0) {
            curSum = 0
        }
        
        curSum += nums[n]
        maxSub = maxSub > curSum ? maxSub : curSum;
    }
    return maxSub;
    
};

