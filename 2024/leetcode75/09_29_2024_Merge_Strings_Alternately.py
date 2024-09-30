def mergeAlternately(word1, word2):
    word1Len = len(word1)
    word2Len = len(word2)

    newWord = ""

    for i in range(max(word1Len, word2Len)):
        if i < word1Len:
            newWord += word1[i]
        if i < word2Len:
            newWord += word2[i]
    
    return newWord