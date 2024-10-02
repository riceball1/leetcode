/**
 * 
https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 */


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let gcd = '';
    const len1 = str1.length;
    const len2 = str2.length;
    const len = Math.min(len1, len2);
    for (let i = 1; i <= len; i++) {
        if (len1 % i === 0 && len2 % i === 0) {
            const subStr = str1.substring(0, i);
            if (str1 === subStr.repeat(len1 / i) && str2 === subStr.repeat(len2 / i)) {
                gcd = subStr;
            }
        }
    }
    return gcd;
};
