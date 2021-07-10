// https://leetcode.com/problems/climbing-stairs/


/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct 
 * ways can you climb to the top
 */


// I did not understand this approach, but learning through other examples
// apparently fibonnaci method, and recursive are some important factors to understanding this
// Checkout a coding example: https://www.youtube.com/watch?v=PiCJf_qCxwI
 function climbStairs(n: number): number {
    // dp method
    const dp = Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i -2];
    }
    
    return dp[n];   
};