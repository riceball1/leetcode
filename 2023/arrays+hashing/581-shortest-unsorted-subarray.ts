// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

function findUnsortedSubarray(nums: number[]): number {
  // Initialize variables
  let start = -1;
  let end = -1;
  let max = Number.MIN_SAFE_INTEGER;

  // Loop through the input array
  for (let i = 0; i < nums.length; i++) {
    // Check if the current number is less than the maximum value seen so far
    if (max > nums[i]) {
      // set start value if not yet set
      if (start === -1) {
        start = i - 1;
      }
      /*
        Loop backwards from start to find the beginning of the unsorted subarray

        If start has been set, we need to check how far back we need to go to find the beginning of the unsorted subarray. We do this by looping backwards from start and comparing each number to nums[i]. If we find a number that is greater than nums[i], we know that the beginning of the subarray is at least one index before that number, so we decrement start accordingly. We keep looping backwards until we reach the beginning of the array or find a number that is not greater than nums[i].

        alternative to the while loop:
        for (let j = start - 1; j >= 0 && nums[j] > nums[i]; j--) {
            start = j;
        }

        */
      while (start - 1 >= 0 && nums[start - 1] > nums[i]) {
        start--;
      }
      end = i + 1;
    } else {
      // Update max to be the maximum value seen so far
      max = nums[i];
    }
  }

  // Return the length of the shortest unsorted subarray
  return end - start;
}

// Alternative approach - https://www.youtube.com/watch?v=hZmwvBIJXPg

function findUnsortedSubarray2(nums: number[]): number {
    let n = nums.length;
  
    if (n === 1) return 0;
  
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < n; i++) {
      if (i === 0 ) { // start of the nums
        if (nums[i] > nums[i + 1]) {
          const [minVal, maxValue] = getMinAndMax(min, max, nums[i])
          min = minVal
          max = maxValue
        }
      } else if (i === n - 1) { // end of the nums
        if (nums[i] < nums[i - 1]) {
            const [minVal, maxValue] = getMinAndMax(min, max, nums[i])
            min = minVal
            max = maxValue
        }
      } else if (nums[i] > nums[i + 1] || nums[i] < nums[i - 1]) {  // middle of the nums
        const [minVal, maxValue] = getMinAndMax(min, max, nums[i])
          min = minVal
          max = maxValue
      }
    }
  
    // determines the start and end of the subarray that needs to be sorted
    let start = 0;
    let end = n - 1;
    while (start <= end && nums[start] <= min) {
      start++;
    }
    while (end >= 0 && nums[end] >= max) {
      end--;
    }
  
    return end - start < 0 ? 0 : end - start + 1;
  }
  

  function getMinAndMax(min, max, current) {
    return [Math.min(min, current), Math.max(max, current)]
  }