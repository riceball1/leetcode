# Sliding Window Technique

## What is the Sliding Window Technique?

This technique shows how a nested for loop in some problems can be converted to a single for loop to reduce the time complexity.

## Example Sliding Window Code

```javascript
// Javascript code for
// O(n) solution for finding
// maximum sum of a subarray
// of size k
function maxSumofK(arr, k) {
let max = 0;
let sum = 0;
//find initial sum of first k elements
for(let n = 0; n < k ; n++) {
	sum += arr[n];	
}
//iterate the array once and increment the right edge
for(let i = k; i < arr.length; i++) {	
		sum += arr[i] - arr[i-k];
		//compare if sum is more than max, if yes then replace max with new sum value
		if(sum > max) {
			max = sum;
		}
		}
	return max;
}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20 ];
console.log(maxSumofK(arr, 4))
//output 28



```

## Example Window Sliding Problems

1. Find the longest substring of a string containing k distinct characters
Given a string and a positive number k, find the longest substring of the string containing k distinct characters. If k is more than the total number of distinct characters in the string, return the whole string.

2. Find all substrings of a string that are a permutation of another string
Find all substrings of a string that contains all characters of another string. In other words, find all substrings of the first string that are anagrams of the second string.

3. Find the longest substring of a string containing distinct characters
Given a string, find the longest substring containing distinct characters.

4. Find maximum length sequence of continuous ones (Using Sliding Window)
Given a binary array, find the index of 0 to be replaced with 1 to get a maximum length sequence of continuous ones.

5. Find the maximum sequence of continuous 1’s formed by replacing at-most k zeroes by ones
Given a binary array, find the maximum sequence of continuous 1’s that can be formed by replacing at most k zeroes by ones.

6. Find minimum sum subarray of size k
Given an integer array, find the minimum sum subarray of size k, where k is a positive integer.

7. Find a subarray having the given sum in an integer array
Given an integer array, find a subarray having a given sum in it.

8. Find the smallest subarray length whose sum of elements is greater than k
Given an array of positive integers, find the smallest subarray’s length whose sum of elements is greater than a given number k.

9. Find the count of distinct elements in every subarray of size k
Given an array and an integer k, find the count of distinct elements in every subarray of size k.

10. Print all subarrays of an array having distinct elements
Given an integer array, print all maximum size subarrays having all distinct elements in them.

11. Count distinct absolute values in a sorted array
Given an array of sorted integers that may contain several duplicate elements, count the total number of distinct absolute values in it.

12. Find duplicates within a range k in an array
Given an array and a positive number k, check whether the array contains any duplicate elements within the range k. If k is more than the array’s size, the solution should check for duplicates in the complete array.


## Resources:
 1. https://www.geeksforgeeks.org/window-sliding-technique/
 2. https://www.baeldung.com/cs/sliding-window-algorithm
 3. https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples
 4. [Window Sliding Technique | Why? What? When? How? | Comparison, Code Identification of Questions - Keerti Purswani](https://www.youtube.com/watch?v=SaI2PHJNNVU) 