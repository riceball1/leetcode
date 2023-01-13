/*

The following are common sorting algorithims:
- Bubble Sort: Time: O(n^2)
- Selection Sort; Time: O(n^2)
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
console.log('bubbleSort', bubbleSort([4, 3, 2]), [2, 3, 4])
console.log('bubbleSort', bubbleSort([-4, 3, 2]), [-4, 2, 3])



/*

Selection Sort
Time Complexity: O(n^2)
Space Complexity: O(1) - inplace sorting, no extra space is used

Unstable; selection sort only works efficiently when the small set of elements is involved or the list is partially previously sorted

*/

function selectionSort(nums) {

    for(let i = 0; i < nums.length; i++) {
        // find min value in unsorted region
        let minIndex = i;
        for(let j = i + 1; j < nums.length; j++) {
            // update the minIndex if the value at j is lower than the current min value
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // after finding the min value in the unsorted region
        // swap with the first unsorted value
        nums[i], nums[minIndex] = nums[minIndex], nums[i]

    }

    return nums;

}

// Test Cases
console.log('selectionSort', selectionSort([3, 2, 1, 5, 4]), [1, 2, 3, 4, 5])

/*

Insertion Sort
Time Complexity: O(n^2)
Space Complexity: O(1) - inplace sorting, no extra space is used

Stable; Selection sort perform sorting by searching for the minimum value number and placing it into the first or last position according to the order (ascending or descending)

*/

function insertionSort(nums) {
    
    for(let i = 1; i < nums.length; i++) {
        let key = nums[i] // set the key to current num
        let j = i - 1;
        while(j >= 0 && nums[j] > key) {
            // keep swapping j up each time
            // when the curr value is greater than key
            nums[j + 1] = nums[j] 
            j = j - 1;
        }
        // set next value to be the key
        nums[j + 1] = key;
    }


    return nums;

}

// Test Cases
console.log('insertionSort', insertionSort([3, 2, 1, 5, 4]), [1, 2, 3, 4, 5])

/*

Merge Sort

*/

