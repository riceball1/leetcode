// https://structy.net/problems/sum-list

/*

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
    let sum = 0;

    while (head) {
        sum += head.val
        head = head.next
    }

    return sum;
};

