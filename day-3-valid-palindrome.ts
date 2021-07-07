// https://leetcode.com/problems/valid-palindrome/

/**
 * Given a string s, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 */

 function isPalindrome(s: string): boolean {    
    // remove white spaces and non alphanumeric chars
    // lowercase the modified string
    let modifiedString = s.replace(/[\W_]+/g,"").toLowerCase();
    // split a string to reverse it, then join it back
    // due to the use of splitting and reversing here and then joining back
    // this may be a O(n) situation or O(n^2) given that there's a loop 
    // and nested loop involved
    let reversedString = modifiedString.split('').reverse().join('');
    
    // check if the strings are the same
    return modifiedString === reversedString;
};