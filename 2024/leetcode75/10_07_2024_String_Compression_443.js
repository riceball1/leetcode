// https://leetcode.com/problems/string-compression/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * Note: This was a bit complicated because I didn't know that it wanted to length of the compressed string array.
 * 
 * Another thing to note is that the string compression can be done in place without using extra space.
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (chars.length == 1) return chars.length; // return length 1 if only one char

    let writeIndex = 0; // Pointer to write compressed chars
    let currentChar = chars[0]; 
    let currentCharCount = 1;

    // Iterate through the chars
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === currentChar) {
            currentCharCount++; // Count consecutive characters
        } else {
            // Write the currentChar and its count (if > 1) into the array
            chars[writeIndex] = currentChar;
            writeIndex++;
            if (currentCharCount > 1) {
                const countStr = String(currentCharCount);
                for (let c of countStr) {
                    chars[writeIndex] = c;
                    writeIndex++;
                }
            }

            // Update currentChar to the new character and reset count
            currentChar = chars[i];
            currentCharCount = 1;
        }
    }

    // Handle the last group of characters (outside the loop)
    chars[writeIndex] = currentChar;
    writeIndex++;
    if (currentCharCount > 1) {
        const countStr = String(currentCharCount);
        for (let c of countStr) {
            chars[writeIndex] = c;
            writeIndex++;
        }
    }

    return writeIndex; // Return the length of the compressed array
};
