// https://leetcode.com/problems/reverse-integer/

/**
 * Given a signed 32-bit integer x, return x with 
 * its digits reversed. If reversing x causes the 
 * value to go outside the signed 32-bit integer 
 * range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to 
 * store 64-bit integers (signed or unsigned).
 */

 function reverse(x: number): number {
    // convert into a string
    // must keep sign at the start and only reverse the numbers
        
        const stringNumberArray = x.toString().split('').reverse();
        const reversedNumberArray = [];
        let isNegative = x < 0;
        
        stringNumberArray.map(stringNum => {
            // this should be always in index 0 because when reverse
    
            if(stringNum !== '-') {
                reversedNumberArray.push(stringNum);
            }
        })
        
        const stringToNumber = parseInt(stringNumberArray.join(''));
        
        const reversedNumber = isNegative ? -stringToNumber : stringToNumber;
        if (reversedNumber > 2**31) return 0;
        return reversedNumber;
        
    };
    
// not passing the following testcase:
// input: 1534236469
// output: 9646324351
// expected

// not passing:
// input: -2147483648
// output: -8463847412
// expected: 0

