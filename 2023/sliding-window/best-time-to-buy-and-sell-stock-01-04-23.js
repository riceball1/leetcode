// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
Prompt:
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4
*/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max_profit = 0;
    // set left at start of array and right next to left
    let left = 0;
    let right = 1;

    // linear search O(n)
    while (left < prices.length) {
        // when we can buy low and sell high
        // we want to calculate if it will result in a max_profit
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            max_profit = Math.max(max_profit, profit);
        } else {
            // left price is higher than right price
            // we want to move left up in this case
            left = right;
        }
        // always iterate right up one
        right++;

    }

    return max_profit;

};

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5)
console.log(maxProfit([7, 6, 4, 3, 1]), 0)
console.log(maxProfit([2, 1, 4]), 3)