// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s.length === 1) return s;

    const vowels = ['a', 'e', 'i', 'o', 'u']

    // store the vowels that exists in an array
    const vowelsFromString = [];

    // iterate over the s to get all vowels
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowelsFromString.push(s[i])
        }
    }

    // convert the s to an array
    const sToArray = s.split("");

    // now iterate over the string then replace each vowel seen with the vowelsFromString
    let lenVowels = vowelsFromString.length - 1;

    for (let i = 0; i < sToArray.length; i++) {
        // iterate and identify the vowels
        if (vowels.includes(sToArray[i].toLowerCase())) {
            // replace the current vowel with the vowel starting from the end of vowelsFromString
            sToArray[i] = vowelsFromString[lenVowels]
            lenVowels -= 1;
        }

    }

    return sToArray.join("")
};


// Improved version with two-pointer approach

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // edge cases
    if (!s || s.length === 1) return s;

    // keep a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    let start = 0;
    let end = s.length - 1;

    // two pointer approach to iterate over the s in array form
    const sToArray = s.split("")

    while(start < end) {

        // check for vowel in the start and end positions
        if(vowels.has(sToArray[start]) && vowels.has(sToArray[end])) {
            // swap the vowels
            let temp = sToArray[end]
            sToArray[end] = sToArray[start]
            sToArray[start] = temp;

            start++;
            end--;
        }

        // move pointer of end if no vowel found
        if(!vowels.has(sToArray[end])) {
            end--;
        }

        // move pointer of start if no vowel found
        if(!vowels.has(sToArray[start])) {
            start++;
        }
    }

    return sToArray.join("") // return to string format
    
};