// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // clean up leading and trailing spaces, also handles empty case
    const trim = s.trim();
    // split the string up and clean up any empty strings
    const splitString = trim.split(" ").filter(word => word !== "");
    if (splitString.length === 1) return trim;

    // two-pointer approach
    let start = 0;
    let end = splitString.length - 1;

    while (start < end) {

        // swap start and end values
        // both are words
        let temp = splitString[end];
        splitString[end] = splitString[start]
        splitString[start] = temp

        // move the start and end values
        start++;
        end--;

    }

    return splitString.join(" ")

};