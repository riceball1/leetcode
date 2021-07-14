// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Given a string s, find the length of the 
 * longest substring without repeating characters.
 */

 function lengthOfLongestSubstring(s: string): number {

};



/**
 * Initial thoughts to approaching this problem:
 * 
 * - would want to keep track of the previous chars to make sure there aren't any repeating
 * - thinking about how we can increase the window (sliding) size of the substring each time 
 * there's a unique char, and if not then remember that part and then start another substring
 * - compare the substrings and return the longest length one
 */