// https://leetcode.com/problems/best-time-to-buy-and-sell-stoc



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // keep track of the max profit, start at 0
    let max_profit = 0;

    // use a two pointer approach to have control of the iteration
    let left = 0;
    let right = 1;
 
    // you want to eventually check all the prices
    while(left < prices.length) {
        // when there is a potential high sell compared to a low buy, do something
        if(prices[left] < prices[right]) {
            // calculate if at this point the max_profit changes
            const profit = prices[right] - prices[left]
            max_profit = Math.max(max_profit, profit)
        } else {
            // otherwise we iterate left
            left = right;
        }
        // always iterate right to keep iteration going
        right++;
    }
    
    // return result
    return max_profit;
 };