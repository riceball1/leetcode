/*
Given an array, reverse every sub-array formed by consecutive k elements.

Example(s)
Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3
Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]
*/

function reverse(arr, k) {
    // edge case for an empty arr or null
    if (!arr || !arr.length) return arr;
  
    let i = 0;
    while (i < arr.length) {
        
      let left = i;
      // this right Math.min helps to determine whether 
      // the k group would end up exceeding the arr length
      let right = Math.min(i + k - 1, arr.length - 1);
  
      // swap within the group
      while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
      // iterate k steps
      i += k;
    }
  
    return arr;
  }
  
  let arr = [1,2,3,4,5,6,7,8,9]
  reverse(arr, 3)
  console.log(JSON.stringify(arr) === "[3,2,1,6,5,4,9,8,7]")