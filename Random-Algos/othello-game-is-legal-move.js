/*
Reversi (https://en.wikipedia.org/wiki/Reversi), also called Othello, is a game where each disc has two sides, black and white, and after being placed, further moves cause other discs to flip colors. Specifically, a line of discs of one color gets flipped when surrounded on both ends by discs of the opposite color.

In this problem, you're given a 2-dimensional array representing the board. Each position will contain a value of “B” for black, “W” for white, or “*” to represent an empty spot. Additionally, we get a position that is currently empty. If it's black's turn to play, our task is to determine if this is a legal move.

A move must meet all of the following criteria:
1. It must have at least one adjacent piece of the opposite color. (Diagonals count)
2. The play must surround a series of pieces of the opposite color in a line, thereby flipping them.

A simple, 1-dimensional example consider:

* W W W B * * * 

In this case, only the first position is a valid move for black to play because it would surround three white tiles. The remaining positions are invalid moves because they would not surround any white tiles.

This is the starting state of the game with black's possible opening moves labeled with an L:

  0 1 2 3 4 5 6 7  (col - 2nd coordinate)
0 * * * * * * * *
1 * * * * * * * *
2 * * * * L * * *
3 * * * B W L * *
4 * * L W B * * *
5 * * * L * * * *
6 * * * * * * * *
7 * * * * * * * *
(row - 1st coordinate)
The board will always be no more than an 8x8 matrix of these three symbols.
 

EXAMPLE(S)
isLegalMove(
  [    0    1    2    3
  0  ['*', '*', '*', '*', '*'],
  1  ['*', '*', '*', '*', '*'],
  2  ['*', 'B', 'W', '*', '*'],
     ['*', '*', '*', '*', '*'],
     ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', 'B', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
Output:  true

isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', 'W', '*', '*', '*'],
  ],
  2, 3)
Output:  false
 

FUNCTION SIGNATURE
function isLegalMove(board, x, y)
*/


function isLegalMove(board, r, c) {
    const size = board.length;

    function look(dy, dx) {
        let currX = c + dx;
        let currY = r + dy;
        let whiteCount = 0;

        while (currX < size && currY < size && currX >= 0 && currY >= 0) {
            if (board[ currY ][ currX ] === "W") {
                whiteCount++;
            } else if (board[ currY ][ currX ] === "B") {
                return whiteCount >= 1; // this determins if the previous is a white piece
            } else {
                return false;
            }
            currX += dx;
            currY += dy;
        }
        return false;
    }

    return (
        look(-1, 0) || // down
        look(-1, 1) || // down and right
        look(0, 1) || // right
        look(1, 1) || // up and right
        look(1, 0) || // up
        look(1, -1) || // up and left
        look(0, -1) || // left
        look(-1, -1)   // down and left
    );
}





// Test Cases

// EXAMPLE(S)
let a = isLegalMove(
  [               
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', 'B', 'W', '*', '*'],
     ['*', '*', '*', '*', '*'],
     ['*', '*', '*', '*', '*'],
  ],
  2, 3)
console.log(a)
// Output:  true

let b = isLegalMove(
  [
    ['*', 'B', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ],
  2, 3)
console.log(b)
// Output:  true

let c = isLegalMove(
  [
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', 'W', '*', '*'],
    ['*', 'W', '*', '*', '*'],
  ],
  2, 3)
// Output:  false
console.log(c)
