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
