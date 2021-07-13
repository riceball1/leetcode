// https://leetcode.com/problems/contains-duplicate/


/**
 * Given an integer array nums, return true if any 
 * value appears at least twice in the array, 
 * and return false if every element is distinct.
 */


function containsDuplicate(nums: number[]): boolean {
    let hasDuplicate = false;
    // hash map can keep track of the nums
// this may result in O(n^z) maybe because of using extra space
let hashMap = {};

nums.map(num => {
    if(hashMap[num] === 1) {
        hasDuplicate = true;
    } else {
        hashMap[num] = 1;
    }
});
return hasDuplicate;

};