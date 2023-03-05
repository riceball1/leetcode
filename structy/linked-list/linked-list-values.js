// https://structy.net/problems/linked-list-values

/*

Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

*/

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
    const output = [];

    while (head) {
        output.push(head.val)
        head = head.next;
    }
    return output;

};