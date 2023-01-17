// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.


 */
function longestConsecutive(nums) {
    // use extra memory to help the time complexity be O(n)
    let numSet = new Set(nums)
    let longestSequence = 0;

    for(let i = 0; i < nums.length; i++) {
        // check if its the start of a sequence
        // check if there's a left neighbor
        let hasLeft = nums[i - 1] === nums[i] - 1
        if(!hasLeft) {
            let j = i;
            // check set for next consecutive numbers
            while(numSet.has(nums[j] + 1) && j < nums.length) {
                longestSequence = Math.max(longestSequence, longestSequence + 1)
                j++;
            }
        }
    }

    return longestSequence

   
  }

  console.log(longestConsecutive([100, 4, 3, 2, 200, 1]))