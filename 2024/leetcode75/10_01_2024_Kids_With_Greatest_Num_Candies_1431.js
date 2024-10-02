// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // determine the max num of candy the highest ith kid holds
    const maxCandyHolderCount = Math.max(...candies)
    // store the results
    const results = []

    for (let i = 0; i < candies.length; i++) {
        const hasHighCandyCount = candies[i] + extraCandies >= maxCandyHolderCount
        results.push(hasHighCandyCount)
    }

    return results;

};