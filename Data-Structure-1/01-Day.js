/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const set = new Set()

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[ i ])) return true;
        set.add(nums[ i ])
    }

    return false;

};

/**
 * @param {number[]} nums
 * @return {number}
 */
// Aggregate Solution
const maxSubArray = (nums) => {
    let prev = nums[ 0 ];
    let max = nums[ 0 ];

    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[ i ]

        prev = Math.max(currNum + prev, currNum)

        max = Math.max(prev, max)
    }

    return max;


}

// See the 3 solutions for max subarray problem : https://leetcode.com/problems/maximum-subarray/solutions/254481/javascript-3-solutions-aggregate-kadane-s-algorithm-divide-and-conquer/?orderBy=most_votes&languageTags=javascript&topicTags=divide-and-conquer

// Aggregate, Kadane's Algo (DP), Divide and Conquer