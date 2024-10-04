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