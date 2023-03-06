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
  
/*

This is an explanation of the algorithm above used to merge two sorted arrays nums1 and nums2 into one sorted array nums1.

Here's how the algorithm works:

Initialize two pointers, index1 and index2, to the last elements of the original arrays, nums1 and nums2, respectively.

We will start filling nums1 from the end, so set up a for loop starting from n + m - 1, where n and m are the sizes of nums2 and nums1 respectively, and iterate until i becomes less than 0 or index2 becomes less than 0.

Inside the loop, compare the elements at nums1[index1] and nums2[index2] and place the larger element at nums1[i].

If the current element from nums1 is greater than the current element from nums2, we place the current element from nums1 at nums1[i], decrement index1 and move on to the next element in nums1.

If the current element from nums2 is greater than or equal to the current element from nums1, we place the current element from nums2 at nums1[i], decrement index2 and move on to the next element in nums2.

Repeat this process until all elements from both arrays are merged into nums1.

The idea behind the algorithm is to avoid creating a new array to merge the two arrays, as it would require O(n) space. Instead, we can take advantage of the fact that nums1 has extra space at the end and merge the two arrays from the end. This way, we avoid the need for extra space and perform the merge operation in place in O(n) time complexity.
*/



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
