// https://leetcode.com/problems/sum-of-two-integers

/**
 *
 * Given two integers a and b,
 * return the sum of the two integers
 * without using the operators + and -.
 */

function getSum(a: number, b: number): number {
  let nums = [];

  // use two loops to push values to a nums
  // the lenght of the nums array should be the total

  if (a > 0) {
    // positive
    for (let i = 0; i < a; i++) {
      nums.push(1);
    }
  } else if (a === 0) {
    return b;
  } else {
  }

  if (b > 0) {
    // positive
    for (let j = 0; j < b; j++) {
      nums.push(1);
    }
  } else if (b === 0) {
    return a;
  }

  return nums.length;
}
