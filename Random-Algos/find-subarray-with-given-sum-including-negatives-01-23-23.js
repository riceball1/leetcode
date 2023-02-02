// https://www.geeksforgeeks.org/find-subarray-with-given-sum-in-array-of-integers/
// similar problem https://www.geeksforgeeks.org/find-subarray-with-given-sum/ that doesn't handle negative integers

// This problem handles negative numbers

/*

Naive Approach
Time: O(n^2) check all subarrays
Space: O(1)

More efficent Approach
Time: O(n) linear
Space: O(n) hashmap used
*/


// Naive Approach 
function subarraySum(arr, sum) {

    // pick a starting point
    for(let i = 0; i < arr.length; i++) {
        currSum = 0;

        for(let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j]
            if(currSum === sum) {
                return "Sum found between: " + i + ' and ' + j;
            }
        }
    }

    return "No subarray found";

}

// Test Case
const arr = [10, 2, -2, -20, 10];
const sum = -10;
console.log(subarraySum(arr, sum))


// Efficient Approach with HashMap - extra space
function subarraySumEfficient(arr, sum) {
    let currSum = 0;
    let start = 0;
    let end = -1;
    let map = new Map();

    // iterate over the arr 
    for(let i = 0; i < arr.length; i++) {
        currSum = currSum + arr[i] // calculate the current sum

        if(currSum - sum == 0) { // found value for current sum
            start = 0;
            end = i;
            break;
        }

        // map already has the value, found subarray with sum
        if(map.has(currSum - sum)) { 
            start = map.get(currSum - sum) + 1;
            end = i;
            break;
        }

        // set value if not in map
        map.set(currSum, i)
    }

    if(end == -1) {
        return "No subarray with given sum exists"
    } else {
        return "Sum found between indexes " + start + " to " + end
    }
}

// Test Case
const arr1 = [10, 2, -2, -20, 10];
const sum1 = -10;
console.log(subarraySumEfficient(arr1, sum1))