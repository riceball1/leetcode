// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 

 Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
var permute = function(nums) {
    const result = []
    backtrack(0) 
    return result;
  
    function backtrack(index) {
      if(index === nums.length) { // [1, 2, 3] --> [2, 3, 1]   
        result.push([...nums])
        return;
      }
  
      for(let i = index; i < nums.length; i++) {
        // swap nums[i], nums[index] <-- 
        let temp = nums[i]
        nums[i] = nums[index] 
        nums[index] = temp;
        backtrack(index + 1)
        
        // unswap nums[i], nums[index]
         let temp2 = nums[i]
         nums[i] = nums[index]
         nums[index] = temp2;
      }
  
    }
  
      
  };
  
  
  console.log(permute([1, 2, 3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]