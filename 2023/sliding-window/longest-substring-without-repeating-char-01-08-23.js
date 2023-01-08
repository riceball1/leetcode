// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring without repeating characters.


/**
 * @param {string} s
 * @return {number}
 * 
 * Time: O(n) - n = number of chars in string
 * Space: O(n) - use of set to keep track of chars seen
 */
const lengthOfLongestSubstring = (s) => {
    const set = new Set();
    let len = 0;
    let left = 0; 
    let right = 0;
    // start left and right at the same starting position

    // keep looping while left & right are under the length of s
    while (left < s.length && right < s.length) { 
        // using a set to keep track of what has been seen
        if (!set.has(s[ right ])) {
            set.add(s[ right ]); // add the right element
            // this increments the len by checking whether the current substring length is the max
            const currSubstringLen = right - left + 1;
            len = Math.max(len, currSubstringLen); 
            right += 1; // iterate right
        } else {
            set.delete(s[ left ]); // right element had been seen
            left += 1; // increment the left
        }
    }
    return len;
};

// Test Cases
console.log(lengthOfLongestSubstring("bbbb"), 1)
console.log(lengthOfLongestSubstring("abcd"), 4)
console.log(lengthOfLongestSubstring("abca"), 3)