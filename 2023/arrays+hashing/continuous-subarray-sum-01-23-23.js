// https://leetcode.com/problems/continuous-subarray-sum

// time O(n) space O(n)
function checkSubarrySum(nums, k) {
    let sum = 0;
    let prefix = 0;
    const set = new Set();

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if(k != 0) sum %= k

        if(set.has(sum)) return true;

        set.add(prefix)
        prefix = sum;
    }

    return false;

}

// Test Cases
console.log(checkSubarrySum([23,2,4,6,7], 6)) // true
console.log(checkSubarrySum([23,2,6,4,7], 6)) // true
console.log(checkSubarrySum([23,2,6,4,7], 13)) // false