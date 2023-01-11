// https://leetcode.com/problems/climbing-stairs/



// Dynamic Programming Approach
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // In DP setup an array to tabulate the results
    const dp = Array(n + 1).fill(0);
    // set 0 and 1 index should return 1
    dp[ 0 ] = 1
    dp[ 1 ] = 1

    // start looping at 2
    for (let i = 2; i <= n; i++) {
        // calculate answers from each index
        // building up the potential results steps
        dp[ i ] = dp[ i - 1 ] + dp[ i - 2 ]
        // e.g. dp[2] = dp[1] + dp[0] = 2
        // e.g. dp[3] = dp[2] + dp[1] = 2 + 1 = 3
    }

    return dp[ n ]

};

// Test Cases
console.log(climbStairs(2), 2)
console.log(climbStairs(3), 3)
console.log(climbStairs(10), 89)