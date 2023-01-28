// https://leetcode.com/problems/is-subsequence


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time O(t) Space O(1)
var isSubsequence = function(s, t) {
    // two pointer approach saves on space
    let sIndex = 0;
    let tIndex = 0;
    // we only care to iterate the length of t
    // this takes care of if t is less than s
    while( tIndex < t.length) {
        // while the chars match increment s index
        if(s[sIndex] === t[tIndex]) {
            sIndex++;
        }
        // always increment t index if we don't find a match
        tIndex++;        
    }
    // if s was found, the index would match the length
    return sIndex === s.length;
    
};