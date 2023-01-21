// https://leetcode.com/problems/intersection-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Time Complexity O(m  + n); space O(m + n)
function interSectionTwoSets(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    let result = [];

    for (const num of set1) {
        if(set2.has(num)) {
            result.push(num)
        }
    }


    return result;
    

};