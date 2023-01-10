// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // Basic template is to have an array hold the results
    // then call the backtracking function
    const result = []
    backtrack(0);
    return result;
  
    // for this to work, we want to keep track of 
    // the current index, and then the sum going down one path
    // and then the accumulation of the answer for that particular path
    function backtrack(index, sum = 0, combo = []) {
    // we need to have 3 different conditions for the base case

    // first base case conditions to stop and return from this path
      if (index == candidates.length || sum > target) {
        return;
      }
      // found the target, make sure to store the result
      if (sum === target) {
        result.push([...combo])
        return;
      }
      
      // make a choice with the current value by adding it to the combo array
      combo.push(candidates[index])
      // then backtrack using this current candiate to see if we can get to the target sum
      backtrack(index, sum + candidates[index], combo) 
      combo.pop() // remove the canadidate value from the combo
  
      // then iterate the index to the next value and start again
      backtrack(index+1, sum, combo)
    }
      
  };
  console.log(combinationSum([2,3,6,7], 7), [[2,2,3],[7]])