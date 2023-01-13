/*

The following are common sorting algorithims:
- Bubble Sort: Time: O(n^2)
- Insertion Sort; Time: O(n^2)
- Merge Sort; Time O(nlogn)

*/

/*

Bubble Sort
Time Complexity = O(n^2) - due to the fact there is an additional internal loop over the entire array
Space Complexity = O(1) - there is not additional space used since it's sorted in-place 

*/

function bubbleSort(nums) {

    // bubble sort you can do in-place sorting algo
    // it uses two loops to go over every item in the array until the first loop finishes iterating over the entirety of the array
    for(let i = 0; i < nums.length; i++) {
        // the second loop does a complete iteration on the array however long nums.length
        for(let j = 0; j < nums.length; j++) {
            // swap when we find that the current element is larger than the next element
            if(nums[j] > nums[j + 1]) {
                let curr = nums[j] // keep track of curr value
                nums[j] = nums[j + 1]
                nums[j + 1] = curr
            }
        }
    } 

    return nums;
}

// Test Cases
console.log(bubbleSort([4, 3, 2]), [2, 3, 4])
console.log(bubbleSort([-4, 3, 2]), [-4, 2, 3])



/*

Insertion Sort

*/



/*

Merge Sort

*/

