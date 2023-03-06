// https://leetcode.com/problems/merge-sorted-array

/**
 Do not return anything, modify nums1 in-place instead.
 */
// see original solution: https://leetcode.com/problems/merge-sorted-array/solutions/2686085/typescript-solution-in-o-m-n-time-explanation/?envType=study-plan&id=data-structure-i&orderBy=most_votes&languageTags=typescript
// Space complexity: O(1) - no additional space
// Time complexity: O(n+m)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1 = m - 1;
    let index2 = n - 1;
  
    for (let i = n + m - 1; i >= 0 && index2 >= 0; i--) {
      const num1 = nums1[index1];
      const num2 = nums2[index2];
  
      if (index1 >= 0 && num1 > num2) {
        nums1[i] = num1;
        index1--;
      } else {
        nums1[i] = num2;
        index2--;
      }
    }
  }
  

// https://leetcode.com/problems/two-sum/description

function twoSum(nums: number[], target: number): number[] {
  let map = {
    [nums[0]]: 0, // set first element in map
  }; // keep track of the previously seen numbers

  for (let i = 1; i < nums.length; i++) {
    let neededNumber = target - nums[i];

    if (neededNumber in map) {
      return [map[neededNumber], i];
    }
    // otherwise add already seen numbers
    map[nums[i]] = i;
  }
  return [-1, -1]; // should never hit this since guaranteed one answer
}
