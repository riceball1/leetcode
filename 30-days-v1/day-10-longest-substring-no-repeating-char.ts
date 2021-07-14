// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Given a string s, find the length of the 
 * longest substring without repeating characters.
 */

 function lengthOfLongestSubstring(s: string): number {
    const seen = {};
    let longest = 0; // 0
    let currentLongest = 0;  // 3
    let stringLength = s.length;
    let index = 0;
    let startIndex = 0;
    let repeatIndex = 0;
    
    while(index < stringLength) {
        if(s[index] in seen) {
        if (currentLongest > longest) {
            longest = currentLongest;
        }
        repeatIndex = seen[s[index]];
        currentLongest = currentLongest - seen[s[index]]  + startIndex;                 
        startIndex = repeatIndex + 1;
        seen[s[index]] = index;
        index += 1;
      } else {
        currentLongest += 1;
        seen[s[index]] = index;
        index += 1;
      }
    }
    if (currentLongest > longest) {
        longest = currentLongest;
    }
    return longest;
  
  };
  

/**
 * Initial thoughts to approaching this problem:
 * 
 * - would want to keep track of the previous chars to make sure there aren't any repeating
 * - thinking about how we can increase the window (sliding) size of the substring each time 
 * there's a unique char, and if not then remember that part and then start another substring
 * - compare the substrings and return the length of longest one
 */