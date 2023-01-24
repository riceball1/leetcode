// https://www.geeksforgeeks.org/maximum-sum-path-across-two-arrays/

/*
Prompt:
Given two sorted arrays, the arrays may have some common elements. Find the sum of the maximum sum path to reach from the beginning of any array to the end of any of the two arrays. We can switch from one array to another array only at common elements. 

Note: The common elements do not have to be at the same indexes.


Example:
Input: ar1[] = {2, 3, 7, 10, 12}, ar2[] = {1, 5, 7, 8}
Output: 35
Explanation: 35 is sum of 1 + 5 + 7 + 10 + 12.
Start from the first element of ar2 which is 1, then move to 5, then 7.  From 7 switch to ar1 (as 7 is common) and traverse 10 and 12.


*/

// Time: O(m + n) Space: O(1) - no extra space needed
function mathPathSum(nums1, nums2) {
    // initialize variables
    let len1 = nums1.length;
    let len2 = nums2.length;
    let i = 0, j = 0;
    let result = 0, sum1 = 0, sum2 = 0;

    while (i < len1 && j < len2) {
        // include only the max nums from it's respective array
        if (nums1[ i ] < nums2[ j ]) {
            sum1 += nums1[ i++ ]
        } else if (nums1[ i ] > nums2[ j ]) {
            sum2 += nums2[ j++ ]
        } else { // found common intersection
            // add the result of the max sum + the current intersection
            result += Math.max(sum1, sum2) + nums1[ i ]
            sum1 = 0;
            sum2 = 0;
            i++;
            j++;
        }
    }
    // add remaining elements
    while (i < len1) {
        sum1 += nums1[ i++ ]
    }
    while (j < len2) {
        sum2 += nums2[ j++ ]
    }

    result += Math.max(sum1, sum2)
    return result;

}

// Test Cases
const arr1 = [ 2, 3, 7, 10, 12, 15, 30, 34 ];
const arr2 = [ 1, 5, 7, 8, 10, 15, 16, 19 ]

console.log(mathPathSum(arr1, arr2)) // 122