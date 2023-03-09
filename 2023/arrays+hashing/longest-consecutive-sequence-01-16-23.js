// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.


 */
function longestConsecutive(nums) {

    if (!nums.length) return 0;
    // use extra memory to help the time complexity be O(n)
    let numSet = new Set(nums)
    let longestSequence = 0;

    for (let num of numSet) {
        if (numSet.has(num - 1)) continue;

        let currNum = num;
        let currMax = 1;
        // check set for next consecutive numbers
        while (numSet.has(currNum + 1)) {
            currMax++;
            currNum++;
        }
        longestSequence = Math.max(longestSequence, currMax)

    }

    return longestSequence


}

console.log(longestConsecutive([ 100, 4, 3, 2, 200, 1 ]))



// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutiveAlternative(nums) {
    let max = 0;
    const lens = {};

    for (let n of nums) {
        if (lens[ n ] != null) continue;

        const l = lens[ n - 1 ] || 0;   // left length
        const r = lens[ n + 1 ] || 0;   // right length

        const len = l + r + 1;

        // extend the length to the boundaries
        lens[ n - l ] = len;
        lens[ n ] = len;
        lens[ n + r ] = len;

        max = Math.max(max, len);
    }

    return max;

};