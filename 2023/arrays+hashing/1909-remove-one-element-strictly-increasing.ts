// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/description/

function canBeIncreasing(nums: number[]): boolean {
  let count = 0; // keep track of the number of changed needed to make increasing

  // iterate over the nums array
  for (let i = 1; i < nums.length; i++) {

    // check if the previous value greater or equal to the current number 
    if (nums[i] <= nums[i - 1]) {
      count++; // update the change
      if (count > 1) {
        return false; // return false if more than 1 change needed
      }

      // check the rest of list and update the current number with the previous number
      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
    }
  }
  return true;
}
