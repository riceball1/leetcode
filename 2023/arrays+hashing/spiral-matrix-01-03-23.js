// https://leetcode.com/problems/spiral-matrix/

/*
Prompt: Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   const result = [];
   // keep track of the matrix that will be traversed
   let rowStart = 0;
   let rowEnd = matrix.length - 1;
   let colStart = 0;
   let colEnd = matrix[0].length - 1;

   // loop while there's still a matrix to traverse
   while(rowStart <= rowEnd && colStart <= colEnd) {
    /*
    The direction to spiral is:
    1. go right
    2. go down
    3. go left
    4. go up
    */

    // 1) Go right
    for (let i = colStart; i <= colEnd; i++) {
        // push each element along this row to the result
        result.push(matrix[rowStart][i])
    }
    // afterwards increment the row to the next row
    rowStart++;

    // 2) Go down
    for (let i = rowStart; i <= rowEnd; i++) {
        // push each element along the column to result
        result.push(matrix[i][colEnd])
    }
    // afterwards decrement the column inward
    colEnd--;

    // 3)  Go left 
    // Traverse left if there there's a row not traversed
    if(rowStart <= rowEnd) {
        for(let i= colEnd; i >= colStart; i--) {
            // push elements from row into results
            result.push(matrix[rowEnd][i]);
        }
        // decrement the row inwards
        rowEnd--;
    }

    // 4) Go up
    // Traverse up if there's a column not traversed
    if(colStart <= colEnd) {
        for (let i = rowEnd; i >= rowStart; i--) {
            // push element from col into results
            result.push(matrix[i][colStart]);
        }
        // increment col inwards
        colStart++;
    }
   }
    return result;
};

// Test Cases
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,9,8,7,4,5])
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]), [1,2,3,4,8,12,11,10,9,5,6,7])