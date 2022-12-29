// https://leetcode.com/problems/move-zeroes/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroesFirstAttemp = function(nums) {
     if(nums.length == 1) return nums;
     let start = 0;
     let end = nums.length - 1;  
   
    while(start < end) {
        if(nums[start] === 0) {
            nums.splice(start,0); // removes zero
            nums.push(0);
        } else if (nums[end] === 0) {
            end--;
        }
        start++;

    }

     return nums;
};

// workign attempt based on discussion for loop

var moveZeroes = function(nums) {
    let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
  return nums;
};


console.log(moveZeroes([0, 2, 4]))