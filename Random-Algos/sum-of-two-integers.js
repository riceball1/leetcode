// https://leetcode.com/problems/sum-of-two-integers/


/**
 * Given two integers a and b, return the sum of the two integers 
 * without using the operators + and -.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    let carry;
    while((a & b) !== 0){
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a ^ b;
};