/**
 * Given a list of words, split it into the smallest possible number of groups of anagrams and return this number as the answer.

Example

For words = ["tea", "eat", "apple", "ate", "vaja", "cut", "java", "utc"], the output should be 4 (groups).

The 4 groups of anagrams in this example are ("tea", "eat", "ate"), ("apple"), ("vaja", "java"), and ("cut", "utc").
 */

function groupAnagrams(words) {
    
    // use a hash map to store the word count based on the char alphabet
    // then add the words that hashes to this and then push those values to the result put
    
    // hashMap 
    let resultHash = new Map();
    
    // iterate over the words to get the hashcount
    for(let i = 0; i < words.length; i++) {
        
        // get hashCode
        const hashCode = getHashCode(words[i])
        // push the word into the resultHash
        const value = resultHash.get(hashCode) || []
        resultHash.set(hashCode, [...value, words[i]])
    }
    
    // O(n) time complexity
    function getHashCode(word) {
        let count = 0;
        for(let i = 0; i < word.length; i++) {
            count += word.charCodeAt(i)
        }
        
        return count;
        
    }

    // return results of those words hashed
    const result = [...resultHash.values()];
    return result.length;
    

}


// Test Cases

console.log(groupAnagrams(["tea", "eat", "apple", "ate", "vaja", "cut", "java", "utc"]), 4)
console.log(groupAnagrams([]), 0)