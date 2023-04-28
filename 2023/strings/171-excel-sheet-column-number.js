// https://leetcode.com/problems/excel-sheet-column-number/description/

/*

Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

*/


/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {

    let number = 0;

    const convertToNumber = (letter) => letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;


    for(let i = 0; i < columnTitle.length; i++) {
        number = convertToNumber(columnTitle[i]) + (number * 26)
    }
    
    return number;
};