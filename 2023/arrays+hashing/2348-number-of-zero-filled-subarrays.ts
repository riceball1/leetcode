// https://leetcode.com/problems/number-of-zero-filled-subarrays/description/


// Time O(n), Space O(1)
// Correct Solution
function zeroFilledSubarray1(nums: number[]): number {

    let zeroes = 0
 
   let left = -1;
   let right = 0;
 
   while(right < nums.length) {
 
     // get left to find zero
     while(right < nums.length && nums[right] !== 0) {
       right++;
     }
     left = right;
 
     // then when it breaks out because it found a zero
     // check right
     while(right < nums.length && nums[right] === 0) {
       right++;
     }
 
     // breaks out when right is not zero
     if(right - left > 0) {
        // This formula calculates the sum of the number of subarrays of all possible lengths between left and right.
       zeroes += (right - left + 1) * (right - left) / 2;
     }
   }
 
   return zeroes;
 
 };

 // My first solution, which didn't pass all test cases

 function zeroFilledSubarray(nums: number[]): number {

    let zeroes = 0
  
    // [1,3,0,0,2,0,0,4]
    let left = 0;
    let right = 1;
  
    while(right < nums.length) {
  
      // get left to find zero
      while(nums[++left] !== 0) 
      // then when it breaks out because it found a zero
      // check right
      right = left + 1;
      while(nums[++right] === 0)
  
      // breaks out when right is not zero
      if(nums.slice(left, right).length > 0) {
        zeroes++;
      }
      // set left to right
      left = right
      right++;
  
    }
  
    return zeroes;
  };
  
  console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]))