// https://leetcode.com/problems/fibonacci-number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    // uses O(1) space 
    if(n <= 1) return n;
     let fib0 = 0
     let fib1 = 1
    
     // iterate linearly 
     for(let i = 2; i <= n; i++) {
        // calculates the prev two values combined
         temp = fib0 + fib1
         fib0 = fib1
         fib1 = temp
     }
    
     return fib1 // returns the last value f(n-1) + f(n - 2)
        
    };