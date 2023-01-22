// https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

/*

Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:

Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls).

- assumptions that there will always be 0s, 1s, and 2s
- sort in place
*/



function sort(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {

        // if 0
        if (nums[ mid ] === 0) {
            // swap with low
            let temp = nums[ low ]
            nums[ low ] = nums[ mid ]
            nums[ mid ] = temp
            low++;
            mid++;
        }
        // if 1
        else if (nums[ mid ] === 1) {
            mid++; // don't need to swap since 1 is mid
        } else {
            // if 2, should swap to high
            let temp = nums[ mid ]
            nums[ mid ] = nums[ high ]
            nums[ high ] = temp;
            high--;
        }

    }

    return nums;
}



// Test Cases
console.log(sort([ 0, 1, 2, 0, 1, 2 ])) // [0, 0, 1, 1, 2, 2]
console.log(sort([ 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ]))
// [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]


/*
Additional method includes count method

You essentially replace the number of array indexes based on the initial count values of 0s, 1s, and 2s

The time complexity is O(n) and O(1) space,
this requires more swapping, but manipulation of the value in the given indexes.
*/

function sortByCount(nums) {
    let index = count0 = count1 = count2 = 0;

    for(index; index < nums.length; index++) {
        switch(nums[index]) {
            case 0:
                count0++;
                break;
            case 1:
                count1++;
                break;
            case 2:
                count2++;
                break;
        }
    }

    // update index again to be used by the count updates
    index = 0;

    while(count0 > 0) {
        nums[index++] = 0;
        count0--;
    }
    while(count1 > 0) {
        nums[index++] = 1;
        count1--;
    }
    while(count2 > 0) {
        nums[index++] = 2;
        count2--;
    }

    return nums;

}

// Test Cases
console.log(sortByCount([ 0, 1, 2, 0, 1, 2 ])) // [0, 0, 1, 1, 2, 2]
console.log(sortByCount([ 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ]))
// [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]