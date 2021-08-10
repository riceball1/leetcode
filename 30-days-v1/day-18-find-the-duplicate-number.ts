// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * Given an array of integers nums containing n + 1 
 * integers where each integer is in the range [1, n] inclusive.
 * 
 * There is only one repeated number in nums, return 
 * this repeated number.
 * 
 * You must solve the problem without modifying the 
 * array nums and uses only constant extra space.
 * 
 * Ex 1
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 */


// Time = 128ms Memory = 59.1 MB
// O(n)
 function findDuplicate(nums: number[]): number {
    const hashMap = {};
    let repeatedNum = 0;
    
    nums.map(num => {
        if(hashMap[num]) {
            repeatedNum = num;
        } else {
            hashMap[num] = num;
        }
    });
    
    return repeatedNum;

};


// attempt 2 using while loop
// 116ms runtime and 56.2 MB memory

function findDuplicateTwo(nums: number[]): number {
    const hashMap = {};
    let repeatedNum = 0;
    let index = 0;
    
    
    while(repeatedNum < 1) {
        if(hashMap[nums[index]]) {
            repeatedNum = nums[index];
        } else {
            hashMap[nums[index]] = nums[index];
        }
        index++;
    }
    
    return repeatedNum;

};