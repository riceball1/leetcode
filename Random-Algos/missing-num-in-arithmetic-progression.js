// https://www.geeksforgeeks.org/find-missing-number-arithmetic-progression/


// Time: O(n) Space: O(1)
function missingNum(nums) {
    // calculates the arithmetic difference between first element and last element
    let difference = (nums[nums.length - 1] - nums[0]) / nums.length;;
    let len = nums.length - 1;

    // loop once over nums array
    for (let i = 0; i < len; i++) {
        // calculate the difference and the current number to find out what the missing value is
      if (nums[i + 1] - nums[i] !== difference) {
        return nums[i] + difference;
      }
    }
    return s
  }
  
  const arr = [1, 6, 11, 16, 21, 31]
  const arr2 = [2, 4, 8, 10, 12, 14]
  const arr3 = [3,6,12,15]
  const arr4 = [1,2,3,4,6]
  
  console.log(missingNum(arr), 26)
  console.log(missingNum(arr2), 6)
  console.log(missingNum(arr3), 9)
  console.log(missingNum(arr4), 5)