function countLibertiesDana(board, row, col) {
    let count = 0;

    const mainPiece = board[row][col]; // W or B
    const oppPiece = mainPiece === 'B' ? 'W' : 'B'

    // used to check for duplicates
    const visited = Array(board.length).fill(Array(board[0].length).fill(0));
    traverse(row, col)
    return count;

    function traverse(row, col) {
  
        // count when liberty is found
      if(board[row][col] === '+') {
        count++;
        visited[row][col] = 1
      }
  
      // stop recursion when out of bounds or visited or if piece is oppPiece
      if(row < 0 || col >= board[0].length || row >= board.length || col<0 || visited[row][col] || board[row][col] === oppPiece) return;
  
      // count if piece is main piece, but still keep traversing
      visited[row][col] = 1
      
      
      // keep traversing 
      traverse(row - 1, col) // keep going up row on the column
      traverse(row + 1, col) // keep going down the row on the column
      traverse(row, col - 1) // keep going down the column on the row
      traverse(row, col + 1) // keep going up the column on the row
  
    }

    
  }
  
  console.log(countLibertiesDana(
    [
      ['+', '+', '+'],
      ['B', 'B', 'B'],
      ['+', '+', 'B'],
    ],
    1, 1))