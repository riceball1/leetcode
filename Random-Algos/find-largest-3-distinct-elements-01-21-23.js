// https://www.geeksforgeeks.org/find-the-largest-three-elements-in-an-array/

/*
Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1). 

Examples :

Input: arr[] = {10, 4, 3, 50, 23, 90}
Output: 90, 50, 23


Assumptions:
- there will always be 3 distinct elements in the array
- cannot use a sorting method since we want O(n) solution

Approach 1:
- iterate 3 times 
    - first pass: find the max number
    - 2nd pass: find the number that's the 2nd max and cannot equal to max number
    - 3rd pass: find the 3rd max, but cannot equal to 2nd max or 1st max

Approach 2:
- three pointer approach?
- one pointer should point to the max number, but the 2nd should be less than max and bigger than 3rd number
- 3rd number must be smaller than 2nd and 1st numbers, but bigger than all other numbers
*/

// three pass approach
function findThreeMaxElements(nums) {
let max = -Infinity;
let maxTwo = -Infinity;
let maxThree = -Infinity;

for(const num of nums) {
    max = Math.max(max, num)
}

for(const num of nums) {
    if(num != max) {
        maxTwo = Math.max(maxTwo, num)
    }
}

for(const num of nums) {
    if(num != maxTwo && num !== max) {
        maxThree = Math.max(maxThree, num)
    }
}

return [max, maxTwo, maxThree]
}

// Test Cases
console.log(findThreeMaxElements([10, 4, 3, 50, 23, 90])) // 90, 50, 23


function findThreeMax(nums) {
    let first = second = third = -Infinity;


    for(let i = 0; i < nums.length; i++) {
        // if current element is greater than first
        if(nums[i] > first) {
            third = second;
            second = first;
            first = nums[i]
        } 
        // if num[i] is in between first and second then update the second
        else if (nums[i] > second) {
            third = second;
            second = nums[i]
        } 

        // update third if greater than third
        else if (nums[i] > third) {
            third = nums[i]
        }

    }


    return [first, second, third]

}

console.log(findThreeMax([10, 4, 3, 50, 23, 90])) // 90, 50, 23