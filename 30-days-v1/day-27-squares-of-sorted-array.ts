// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * Given an integer array nums sorted in non-decreasing order, return 
 * an array of the squares of each number sorted in non-decreasing order.
 */

// naive approach - using O(n) time complexity and O(n) space complexity
 function sortedSquaresBruteForce(nums: number[]): number[] {
    // bruteforce
    const sortedSquaredNumsArray = [];
    for(let i = 0; i < nums.length; i++) {
        sortedSquaredNumsArray.push(nums[i] * nums[i]);
    }
    return sortedSquaredNumsArray.sort((a, b) => a - b);
};


// The only thing I didn't understand for this
// was that I needed to know that the 2nd param in the for-loop was an exit condition
// so I needed to get 1>=0 working in order to get the squaredNums[0] assigned

function sortedSquaresTwoPointer(nums: number[]): number[] {
    // two-pointer approach
    let squaredNums = [];
    let pointerOne = 0;
    let pointerTwo = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--) {
        let a = nums[pointerOne] * nums[pointerOne];
        let b = nums[pointerTwo] * nums[pointerTwo];
        if (a > b) {
             pointerOne++;
            squaredNums[i] = a;
        } else {
            pointerTwo--;
            squaredNums[i] = b;
        } 
       
    }
    
    return squaredNums;
    
};