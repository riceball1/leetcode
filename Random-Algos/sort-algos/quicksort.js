/*

Quicksort is a divide and conquer sorting algo

The basics of quicksort:

- select any element o fthe list as the pivot
- paritition around the pivot, left is the smaller values and right is the bigger values

- recursively sort the sections

Time - O(n^2)
Space - O(n)
*/

function quicksort(array) {
    // base case 
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[0]
    const left = [] // smaller values
    const right = [] // larger values

    // iterate over the array to sort the values
    for (const num of array) {
        // sort values around pivot
        if(num < pivot) {
            // smaller values sorted to the left
            left.push(num)
        } else {
            // larger values sorted to the right
            right.push(num)
        }
    }

    // result

    return [...quicksort(left), pivot, ...quicksort(right)]


}


// Test Cases
let a = quicksort([1, 3, 2]) // == [1, 2, 3]
let b = quicksort([0, 99, -1, 2]) //  == [-1, 0, 2, 99]
let c = quicksort([0, 1, 0, 0, 0]) // == [0, 0, 0, 0, 1]

console.log(a, b, c)