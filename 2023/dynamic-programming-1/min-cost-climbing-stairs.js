// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

    // start iterating at index 2
    for (let i = 2; i < cost.length; i++)
        // calculate the prev 2 steps to find min cost of the step
        cost[ i ] = Math.min(cost[ i - 1 ] + cost[ i ], cost[ i - 2 ] + cost[ i ]);
    return Math.min(cost.pop(), cost.pop()) // at end pop the last 2 to determine which one cost the least


};