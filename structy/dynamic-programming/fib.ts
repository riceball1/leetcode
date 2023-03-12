// https://structy.net/problems/fib

/*
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

Solve this recursively.

*/

const cache: { [key: number]: number } = {};

const fib = (n: number): number => {

// base case for 0 and 1 is just n;
  if (n < 2) return n;
  // checks the cache is the number was already previously calculated
  if (cache[n]) return cache[n];
  // adds the number to the cache if not previously added before
  cache[n] = fib(n - 1) + fib(n - 2);

  return cache[n]; // return fib value of n
};
