/**
 * Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a subsequence of the first one.
 * 
 * Example One:
 * 
 * Input: 
 * array = [5, 1, 22, 25, 6, -1, 8, 10]
 * sequence = [1, 6, -1, 10]
 * 
 * return true
 * 
 * 
 */



function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
      
      // take the first array and then the sequence
      // loop through array until it hits the first item of the sequence
      // then keep going until the end of the first array
      // if at any time the array is finished and the sequence hasn't been checked through
      // then we return false
      let indexOne = 0; // maintains count of the first array length
      let indexTwo = 0; // maintain count of sequence array
      let isValid = false;
      while(indexOne < array.length - 1) {
          // keep looping until we finish checking all of array
          if(array[indexOne] === sequence[indexTwo]) {
              indexOne++;
              indexTwo++;
              isValid = true;
          } else {
              if (indexTwo < sequence.length -1) {
                  isValid = false;
              }
              // array doesn't contain the sequence so we increment 
              // and check the next value in array
              indexOne++;
          }
          
      }
      
      
      
    return isValid;
  }
  