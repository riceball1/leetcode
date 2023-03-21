// https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/



// Time O(n^2), Space O(n)

// I used a prefix sum approach
function countSmallerI(nums: number[]): number[] {

    let result = Array(nums.length).fill(0);
    let left = 0;
    while(left < nums.length) {
        let self = nums[left]
        let count = 0;
        for(let i = left + 1; i < nums.length; i++) {
            if(nums[i] < self) {
                count++;
            }
        }
        if(count > 0) {
            result[left] = count;
        }
        left++; // move the current number;
    }


    return result;


};