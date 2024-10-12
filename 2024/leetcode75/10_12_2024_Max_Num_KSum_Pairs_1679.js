// https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75


// My initial solution not correctly working
// Because it doesn't remove the used numbers from the array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {

    // edge case 
    if(nums.length == 1) {
        return 0;
    }

    // declare variables
    let maxOperations = 0;
    let left = 0;
    let right = 1;

    while (left < nums.length && right < nums.length){
        const sum = nums[left] + nums[right]

        if(sum === k) {
            maxOperations++;
            left++;
            right = left + 1;
        } else {
            right++;
            if(right >= nums.length) {
                left++;
                right = left + 1;
            }
        }
    }


    return maxOperations;
    
};




// LLM answer:

var maxOperations = function(nums, k) {
    // edge case
    if (nums.length < 2) {
        return 0;
    }

    let maxOperations = 0;
    const countMap = {};

    for (const num of nums) {
        const complement = k - num;

        if (countMap[complement] > 0) {
            // Found a valid pair (num + complement = k)
            maxOperations++;
            // Decrease the count of the complement
            countMap[complement]--;
        } else {
            // Otherwise, store the count of the current number
            countMap[num] = (countMap[num] || 0) + 1;
        }
    }

    return maxOperations;
};
