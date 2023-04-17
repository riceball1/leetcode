// https://leetcode.com/problems/transpose-matrix/description/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = function (matrix) {
    // variables
    const rows = matrix.length;
    const columns = matrix[ 0 ].length;

    // create a result matrix that flips the column and rows
    const result = Array.from(Array(columns), () => new Array(rows).fill(0));


    // iterate and transpose
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            // add the opposite value to the result matrix transposed position
            result[ j ][ i ] = matrix[ i ][ j ]
        }
    }

    return result;

};