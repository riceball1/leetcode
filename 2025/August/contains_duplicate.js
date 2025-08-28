// Contains duplicates -- https://neetcode.io/problems/duplicate-integer?list=neetcode150


// Solution 1: using a hashmap to keep track of the already seen numbers
// Space and Time Complexity: O(1) space because it doesn't require modifying the hashmap and O(n) time because we only at most loop through the array once
// Assumption: may not always have a result, so it can be false
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // if the array is smaller than 2 then there is no solution, edge case
        if (nums.length < 2) return false
        // keep track of the numbers already seen
        const alreadySeen = new Map()

        // always put the first index into the hashMap since we already know it'll be looked at compared to the 2nd value in the array
        alreadySeen.set(nums[0])

        // loop through the array
            // see if the alreadySeen numbers contains the same value as the current
        for(let i = 1; i < nums.length; i++) {
            if (alreadySeen.has(nums[i])) return true
            alreadySeen.set(nums[i])
        }
        
        return false
    }
}

// Solution 2: O(nlogn) which requires sorting and doing two pointer approach to compare the previous value to the current value

// Test cases
const test1 = [1, 1, 0, 3] // true
const test2 = [1, 2, 3] // false
const test3 = [1] // false
const test4 = [1, 2] // false
const test5 = [1, 1] // true
