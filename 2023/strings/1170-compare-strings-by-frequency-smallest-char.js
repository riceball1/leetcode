// https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/



/*

Description:
Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.


Example 1:
Input: queries = ["cbd"], words = ["zaaaz"]
Output: [1]
Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").


Approach 1:
- keep track of the frequencies of the words in the queries and words
- sort the words


*/

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = function (queries, words) {
    const result = [];
    // frequency of query
    const queryFrequency = queries.map(q => countFrequencies(q))
    // frequency of words
    let wordsFrequency = words.map(w => countFrequencies(w))

    // sorting in ascending order
    wordsFrequency = wordsFrequency.sort((a, b) => a - b)

    // iterate over the queryFrequency and do binary search
    for(let val of queryFrequency) {
        let start = 0;
        let end = words.length - 1;

        while(start <= end) {
            let mid = Math.floor((start + end)/ 2)
            // if the current val in the queryFrequency is 
            // greater or equal to the wordsFrequency val
            // shrink the start range down
            // eventually will find the mid point
            if(val >= wordsFrequency[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        result.push(wordsFrequency.length - start)
    }

    return result;
};

const countFrequencies = (str) => {
    const freq = {};

    for (let i of str) {
        freq[i] = freq[ i ] ? (freq[ i ] += 1) : 1;
    }

    return freq[ Object.keys(freq).sort()[ 0 ] ]
}