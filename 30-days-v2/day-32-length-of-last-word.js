// https://leetcode.com/problems/length-of-last-word/

/**
 * 
 * Given a string s consisting of some 
 * words separated by some number of spaces, return the 
 * length of the last word in the string.
 * A word is a maximal substring consisting of 
 * non-space characters only.
 */

 var lengthOfLastWord = function(s) {
    
    let splitWords = s.split(' ');
    let filteredWords = splitWords.filter(word => {
        if(word !== ' ') { return word}
    });
    return filteredWords[filteredWords.length -1].length;
    
};



/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWordSecond = function(s) {
    // trim the empty spaces
     let right = s.length - 1;
     
     while(right >= 0 && s[right] == ' ') {
         right -= 1;
     }
     
     // compute the length of the last word
     
     let length = 0;
     while(right >= 0 && s[right] != ' ') {
         right -= 1;
         length += 1;
     }
     
     return length;
     
 };