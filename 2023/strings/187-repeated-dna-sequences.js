// https://leetcode.com/problems/repeated-dna-sequences/

/*

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Constraints:

1 <= s.length <= 105
s[i] is either 'A', 'C', 'G', or 'T'.

*/

/**
 * @param {string} s
 * @return {string[]}
 */


// Brute Force
const findRepeatedDnaSequences = function (s) {
    let seen = new Set()
    let result = new Set()

    // goes only up to s.length - 9 to ensure that there is always
    // substrings of 10 to check 
    for (let i = 0; i < s.length - 9; i++) {
        let current = s.slice(i, i + 10) 
        if(seen.has(current)) {
            result.add(current)
        }
        seen.add(current)
    }

    return Array.from(result)

}



// Time O(n^2); Space O(n) n = lenght of s
const findRepeatedDnaSequencesOptimized = function (s) {
    // initialize the rolling hash parameters
    const A = 4;
    const MOD = Math.pow(2, 20); // chosen to fit within 32 bits
    const map = new Map(); // to store the counts of each substring

    let hash = 0; // current hash value
    for (let i = 0; i < s.length; i++) {
        // calculate the hash value of the current substring
        hash = ((hash * A) % MOD + getCode(s[ i ])) % MOD;

        if (i >= 9) { // we have a substring of length 10
            // update the count of this substring
            const substr = s.slice(i - 9, i + 1);
            map.set(substr, (map.get(substr) || 0) + 1);
        }
    }

    // find all substrings with a count greater than 1
    const result = [];
    for (let [ substr, count ] of map.entries()) {
        if (count > 1) {
            result.push(substr);
        }
    }

    return result;
};

// helper function to convert nucleotide to integer code
function getCode(c) {
    switch (c) {
        case 'A':
            return 0;
        case 'C':
            return 1;
        case 'G':
            return 2;
        case 'T':
            return 3;
    }
}


// Test Cases

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

console.log(findRepeatedDnaSequences(s)) // ["AAAAACCCCC","CCCCCAAAAA"]