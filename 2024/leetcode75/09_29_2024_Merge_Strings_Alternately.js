/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    // measure the length of the words
    const word1Len = word1.length
    const word2Len = word2.length

    let newWord = ""

    // iterate over the words based on the len of word1

    let i = 0;

    for (i; i < word1Len; i++) {
        newWord += word1[i]
        if(word2.length > 0 && word2[i]) {
            newWord += word2[i]
        } else {
            if(i < word1Len) {
                // then make sure to append the rest of the word1 to the end of the newWord
                newWord += word1.slice(i + 1)
                break;
            }
            break;
        }
    }

    newWord += word2.slice(i)

    return newWord;
    
};
