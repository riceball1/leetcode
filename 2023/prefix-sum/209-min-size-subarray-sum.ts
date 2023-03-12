// https://leetcode.com/problems/minimum-size-subarray-sum/description/


/*
- uses a sliding window approach
- Time O(n) and Space O(1)

*/

function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLength = Infinity;
  
    // use a sliding window approach
    while (right < nums.length) {
      sum += nums[right]; // calculate the sum
  
      while (sum >= target) { // if sum >= target
        // update the minLength by checking the current length
        minLength = Math.min(minLength, right - left + 1);
        sum -= nums[left]; // update the sum by subtracting left
        left++; // move left pointer up
      }
  
      right++; // otherwise move right pointer up
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  