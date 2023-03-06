// https://leetcode.com/problems/kth-missing-positive-number/description/

// Time O(n) Space O(1)
function findKthPositive(arr: number[], k: number): number {
  let prevNumber = 0; // at the start of the array, previous number is zero

  for (let i = 0; i < arr.length; i++) {
    // get the difference between the current number
    // and the prev Number, subtracting by 1 to account for
    // index not starting at 1
    const difference = arr[i] - prevNumber - 1;

    // the gap between the prevNumber and the current number
    if (k > difference) {
      k -= difference;
    } else {
      return prevNumber + k;
    }
    // update prevNumber with current number
    prevNumber = arr[i];
  }

  // otherwise the missing number is outside the bounds of the array
  return prevNumber + k;
}

// binary search approach O(log n)

function findKthPositiveBinarySearch(arr: number[], k: number): number {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] - (mid + 1) < k) {
      /*
            If the difference between arr[mid] and (mid + 1) is less than k, it means that the k-th positive integer missing must be to the right of mid. Therefore, update the start index to mid + 1.
        */
      start = mid + 1;
    } else {
      /*
        Otherwise, the k-th positive integer missing must be to the left of mid. Therefore, update the end index to mid - 1.
        */
      end = mid - 1;
    }
  }

  return start + k;
}

/*
The idea behind this algorithm is that we can use binary search to find the index of the k-th positive integer missing from the array. We do this by comparing the difference between each element and its index with k. If this difference is less than k, it means that the k-th positive integer missing must be to the right of this element. Otherwise, it must be to the left. By iteratively narrowing down the search space in this way, we can find the index of the k-th missing integer in O(log n) time complexity.
*/
