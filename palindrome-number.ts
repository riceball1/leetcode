// https://leetcode.com/problems/palindrome-number/

/**
 * 
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward 
 * as forward. For example, 121 is palindrome while 123 is not.
 */

function isPalindrome(x: number): boolean {
    
    const numString : string = x.toString();
    const numArrayReversed : string = numString.split('').reverse().join('');
    
    return numString === numArrayReversed;

};