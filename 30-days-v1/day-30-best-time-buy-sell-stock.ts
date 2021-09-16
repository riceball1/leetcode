// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * 
 * You are given an array prices where prices[i] is the 
 * price of a given stock on the ith day. 
 * You want to maximize your profit by choosing a single 
 * day to buy one stock and choosing a different day in the 
 * future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this 
 * transaction. If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let left = 0; // buy
    let right = 1; // sell
    let max_profit = 0;
  
    while(right < prices.length) {
      // profitable?
      if(prices[left] < prices[right]) {
        const profit = prices[right] - prices[left];
        max_profit = Math.max(max_profit, profit)
      } else {
        left = right 
        // go to the minimum
      }
      right += 1
    }
  
    return max_profit
};