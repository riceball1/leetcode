
// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // keep track of what numbers have been seen
    // key = nums[i] value = i
    const numsTracker = new Map()

    // loop over the nums
    for (let i = 0; i < nums.length; i++) {
        // check if the combination of the current number subtracting the target equals 
        // to one of the numbers seen
        const otherNum = target - nums[i];
        if (numsTracker.has(otherNum)) {
            return [numsTracker.get(otherNum), i]
        } else {
            // store the nums[i], i
            numsTracker.set(nums[i], i)
        }
    }
}

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9)) // [0,1]
console.log(twoSum([3, 2, 4], 6)) // [1,2]
console.log(twoSum([3, 3], 6)) // [0,1]