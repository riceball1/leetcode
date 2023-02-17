// https://leetcode.com/problems/search-in-rotated-sorted-array/description/



const search = (nums, target) => {

    let left = 0;
    let right = nums.length - 1;

    // keep iterating while left and right have not crossed paths
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        if (nums[ middle ] === target) {
            return middle
        }


        // since the array can be rotated, but still sorted we want to identify the possible sorted portion of the array

        // check left side
        if (nums[ left ] <= nums[ middle ]) {
            if (nums[ left ] <= target && target <= nums[ middle ]) {
                // target is to the left, so move tail of array down
                right = middle - 1;
            } else {
                // it's to the right side
                // move front of the array up
                left = middle + 1;
            }
        } else {
            // check right side
            if (nums[ middle ] <= target && target <= nums[ right ]) {
                // target in right side
                left = middle + 1
            } else {
                // target is in left side
                right = middle - 1
            }
        }
    }

    // did not find target
    return -1;
}

// Test Cases
const nums = [ 4, 5, 6, 7, 0, 1, 2 ]
const target = 0
console.log(search(nums, target)) // 4

const nums2 = [ 4, 5, 6, 7, 0, 1, 2 ]
const target2 = 3
console.log(search(nums2, target2)) // -1