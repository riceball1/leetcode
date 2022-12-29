# https://leetcode.com/problems/merge-sorted-array/


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        tempArr = nums1[:m]
        j = 0
        k = 0
        for i in range(m + n): # 4th interation
            if (j >= n and tempArr[j] <= nums2[k]) or k < m:
                nums1[i] = tempArr[j] 
                j = j + 1 
            else:
                nums1[i] = nums2[k]
                k = k + 1 