function cellTowerDistance(celltower, customers) {
    let maxSoFar = 0; // keep track of the maximum distance so far
    let cellTowerIdx = 0; // index to keep track of the cell tower distance
  
    for (const customer of customers) {
      let closest = null;
  
      // loop through celltowers per customer
      while (cellTowerIdx < celltower.length - 1) {
        const diff = Math.abs(customer - celltower[cellTowerIdx]);
        const diff2 = Math.abs(customer - celltower[cellTowerIdx + 1]);
        // when we've found the mininum distance
        if (diff2 > diff) {
          break;
        }
  
        cellTowerIdx++;
        // set the closest to diff2
        if (closest === null || diff2 < closest) {
          closest = diff2;
        }
      }
      // found the maximum min distance so far
      if (closest !== null && closest > maxSoFar) {
        maxSoFar = closest;
      }
  
      // Reset the cellTowerIdx for the next iteration
      cellTowerIdx = 0;
    }
    // result is the maximum min distance needed for all the customers to celltower 
    return maxSoFar;
  }
  
  
  // Test case 1:
  const celltower1 = [0, 4];
  const customers1 = [0, 1, 3, 5, 7, 9, 11];
  const maxDistance1 = cellTowerDistance(celltower1, customers1);
  console.log(maxDistance1); // Output: 7
  
  // Test case 2:
  const celltower2 = [0, 2, 4, 5];
  const customers2 = [0, 1, 3, 8];
  const maxDistance2 = cellTowerDistance(celltower2, customers2);
  console.log(maxDistance2); // Output: 3
  
  // Test case 3:
  const celltower3 = [0, 8, 11, 13];
  const customers3 = [0, 2, 4, 12, 19];
  const maxDistance3 = cellTowerDistance(celltower3, customers3);
  console.log(maxDistance3); // Output: 6
  