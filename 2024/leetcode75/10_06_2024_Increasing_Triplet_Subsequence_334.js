//https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

// Notes: I noticed that initially I was thinking about the problem wrong. I had tried to do an O(n^3) approach, but the way below is O(n) and is much more efficient.
// I also didn't think about the fact there's no constraint on the order of the numbers, so I could just keep track of the first and second smallest numbers and if I find a number greater than the second, I know I have a triplet.


// The space complexity is O(1) because we are only using two variables to keep track of the first and second smallest numbers.
// The time complexity is O(n) because we are only looping through the nums array once.

var increasingTriplet = function(nums) {
    // Step 1: Initialize first and second
    let first = Infinity;
    let second = Infinity;

    // Step 2: Loop through the nums array
    for (let num of nums) {
        // Update first
        if (num <= first) {
            first = num; 
        } 
        // Update second
        else if (num <= second) {
            second = num; 
        } 
        // Found a valid triplet
        else { 
            return true; 
        }
    }
    
    // Step 3: If no triplet is found, return false
    return false;
};
