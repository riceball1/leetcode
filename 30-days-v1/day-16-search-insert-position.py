# // https://leetcode.com/problems/search-insert-position/

# /**
#  * Given a sorted array of distinct integers and a 
#  * target value, return the index if the target is found. 
#  * If not, return the index where it would be if it were inserted in order.
#  * 
#  * You must write an algorithm with O(log n) runtime complexity.
#  */

# /**
#  * example 1:
#  * 
#  * Input: nums = [1,3,5,6], target = 5
#  * Output: 2
#  */

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        
        try:
            index = nums.index(target)
            return index
        except ValueError:
            # if beginning of the array
            if target < nums[0]:
                return 0;
            # if target is great than the last value of the array
            # then it is the length of the array
            if target > nums[len(nums) - 1]:
                return len(nums)
            for num in range(len(nums)):
                if nums[num] < target and nums[num + 1] > target:
                    return num + 1
            
        
        