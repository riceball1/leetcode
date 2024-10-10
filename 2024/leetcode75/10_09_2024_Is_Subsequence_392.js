// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0;
    let right = 0;

    while(right < t.length) {
        // Check if all characters in 's' have been matched
        if (left === s.length) return true;

        // If characters match, move both pointers
        if (s[left] === t[right]) {
            left++;
        }
        // Always move the right pointer
        right++;
    }

    // After the loop, check if all characters of 's' were found
    return left === s.length;
};
