// https://leetcode.com/problems/consecutive-characters/


/**
 * 
 * The power of the string is the maximum length of a 
 * non-empty substring that contains only one unique character.
 * 
 * Given a string s, return the power of s.
 */

 function maxPower(s: string): number {
    // keeps track of the longest length
    let maxLength = 1;
    let currentLength = 1;

    for (let i = 0; i < s.length - 1; i++) {
        if(s[i] == s[i + 1]) {
            currentLength++;
        } else {

            // check that the currentLength and maxLength
            if(maxLength < currentLength) {
                maxLength = currentLength;
            }
            currentLength = 1;
        }
    }
    
    return maxLength < currentLength ? currentLength : maxLength;
   

};