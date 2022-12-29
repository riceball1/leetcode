// https://leetcode.com/problems/permutations/
// Youtube Video: https://www.youtube.com/watch?v=s7AvT7cGdSo


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const result = [];
    
    const walk = (temp, rest) => {
      if (rest.length === 0) {
        result.push(temp);
        return;
      }
    
      for (let i = 0; i < rest.length; i++) {
        const newRest = rest.slice(0);
        newRest.splice(i, 1);
        walk(temp.concat(rest[i]), newRest);
      }
    }
    
    walk([], nums);
    
    return result;
  
  };

  /**
   * This uses idea of backtracking, which is what the "walk"
   * function is doing.
   * 
   * What is backtracking?
   * 
   * Backtracking is a general algorithm for finding solutions to 
   * some computational problems, notably constraint satisfaction problems, 
   * that incrementally builds candidates to the solutions, and abandons a 
   * candidate as soon as it determines that the candidate cannot possibly 
   * be completed to a valid solution.
   * 
   */


