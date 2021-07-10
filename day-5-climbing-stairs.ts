// https://leetcode.com/problems/climbing-stairs/


/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct 
 * ways can you climb to the top
 */


 function climbStairs(n: number): number {
    // constraint 1 <= n <= 45
    // if 1 there can only be 1 steps;
    if (n === 1) return 1;
};