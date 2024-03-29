// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
Prompt:
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Constraints:

3 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5

*/

function triplets(nums) {
    let results = [];
    nums.sort((a, b) => a - b); // sorts the nums
    for (let i = 0; i < nums.length; i++) {
        // skip the duplicate when it's not the first element
        if (i > 0 && nums[ i ] === nums[ i - 1 ]) continue;
        let left = i + 1; // left should always be 1 passed i 
        let right = nums.length - 1; // the end of the array
        while (left < right) {
            // calculate the threeSum
            let threeSum = nums[ i ] + nums[ left ] + nums[ right ];
            if (threeSum === 0) {
                // push into result
                results.push(nums[ i ], nums[ left ], nums[ right ]);
                left++; // increment left again since there may be more in the array to check
            }
            else if (threeSum > 0) right--; // reduce the right to decrease sum
            else if (threeSum < 0) left++; // too small increase the left to make sum bigger

            // advance left pointer to the position in the array it's not duplicate
            while (left < right && nums[ left ] === nums[ left - 1 ]) {
                left++;
            }
        }

    }

    return results;
}

// Test Cases

console.log(triplets([ -1, 0, 1, 2, -1, -4 ]), [ [ -1, -1, 2 ], [ -1, 0, 1 ] ])
console.log(triplets([ 0, 0, 0 ]), [ [ 0, 0, 0 ] ])


/*
3Sum is a problem where you are given an array of integers and are asked to find all unique triplets that add up to a given target. One way to solve the problem is to use a variation of the two pointer method.

Sort the array in ascending order.
Iterate through the array and for each element, use the two pointer method to find all the pairs in the subarray that starts from the next element and ends at the end of the array such that the sum of the current element and the pair equals the target.
To avoid duplicate triplets, skip any element that is the same as the previous element.
This algorithm has a time complexity of O(n^2) and a space complexity of O(1).


*/