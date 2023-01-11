// https://leetcode.com/problems/subsets/

/**
 
 Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.


 */

function subsets(nums) {
    const result = []; // keep track of the result
    backtrack(0) // call the backtracking function
    return result; // return result;

    function backtrack(index, subset = []) {
        // base case when to stop the recursion
        if(index > nums.length) {
            result.push([...subset]) // push the last subset into the result
            return;
        }

        // make sure to add the other subsets that were created to results as well
        result.push([...subset])

        for(let i = index; i < nums.length; i++) {
            subset.push(nums[i]) // include curr num
            backtrack(i + 1, subset)
            subset.pop() // remove previous num
        }
    }

}


console.log(subsets([1, 2, 3]))
/*
expected output:
  [],       [ 1 ],
  [ 1, 2 ], [ 1, 2, 3 ],
  [ 1, 3 ], [ 2 ],
  [ 2, 3 ], [ 3 ]
]
*/