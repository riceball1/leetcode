// https://leetcode.com/problems/arithmetic-slices/


/*

An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {

    // edge case
    if (nums.length <= 2) return 0;

    let numOfArithmeticSubarrays = 0;
    let subArrayLength = 2;
    for (let startIndex = 0; startIndex < nums.length - 2; startIndex++) {
        // initial difference
        const diff = nums[ startIndex + 1 ] - nums[ startIndex ]
        for (let endIndex = startIndex + 1; endIndex < nums.length - 1; endIndex++) {
            // check if the difference is equal to the initial difference
            const currDiff = nums[ endIndex + 1 ] - nums[ endIndex ]


            if (currDiff === diff) {
                // found a sequence
                subArrayLength++;
                if (subArrayLength >= 3) {
                    numOfArithmeticSubarrays += 1;

                }
            } else {
                // reset subArrayLength to 2
                subArrayLength = 2;
                break;
            }
        }
    }


    return numOfArithmeticSubarrays;


};

