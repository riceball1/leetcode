// https://leetcode.com/problems/longest-palindrome

/**
 * @param {string} s
 * @return {number}
 */

// what is the longest palindrome that can be created
// that is why you can use a map + the modulo operator
var longestPalindrome = function (s) {
    let ans = 0; // store the length
    let keys = {}; // keep track of the char

    // iterate over the chars in the string
    for (let char of s) {
        // update the char in the map
        keys[ char ] = (keys[ char ] || 0) + 1;
        if (keys[ char ] % 2 == 0) ans += 2;
    }

    // if the s is greater than the answer it means only 1 letter could be used since the others are most likely single letters and cannot be used as part of the palindrome
    // otherwise we have only an even amount of letters
    return s.length > ans ? ans + 1 : ans;

};