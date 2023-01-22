// https://www.geeksforgeeks.org/find-subarray-with-given-sum/

/*

approach 1 - do O(n^2) nested loops
approach 2 - sliding window

assumption -- all values are positive values
*/

// sliding window
// Time: O(n) iterate across at most entire nums array
// Space: O(1) does not include the output array, so no space was used
function findSubarraySum(nums, sum) {
    let start = 0;
    let currentSum = nums[0]

    for(let i = 1; i < nums.length; i++) {
        // keep iterating the start if the current sum is too large
        while(currentSum > sum) {
            currentSum = currentSum - nums[start]
            start++;
        }
        // when sum is found, return the subarray
        if(currentSum === sum) {
            return nums.slice(start, i);
        }
        // calculate currentSum
        currentSum = currentSum + nums[i]
    }
    // return empty array if no values match sum
    return []
}

// Test Cases
console.log(findSubarraySum([1, 4, 20, 3, 10, 5], 33)) // output: [20, 3, 10] indexes 2 - 4
console.log(findSubarraySum([15, 2, 4, 8, 9, 5, 10, 23 ], 23)) // [ 2, 4, 8, 9 ]