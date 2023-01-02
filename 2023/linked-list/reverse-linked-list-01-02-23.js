// https://leetcode.com/problems/reverse-linked-list/

/*
Prompt: Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative approach
var reverseList = function(head) {
    if(!head?.next) return head; // edge case
    let curr = head;
    let reverseList = new ListNode(0)

    while(curr) {
        // use a dummy node to append the nodes to, making
        // sure to use swap method to attach new node and keeping the rest of the prev list
        let tempNext = reverseList.next;
        reverseList.next = curr; // assign curr node to the next list
        // we don't want to iterate the list because we're going to keep attaching each node we see to this list
        curr = curr.next // iterate the curr node
        reverseList.next.next = tempNext; // add temp next to the list
    }
    return reverseList.next;
};

// Test Cases

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const node1 = new ListNode(2, new ListNode(3, new ListNode(4)))
console.log(reverseList(node1), '4 -> 3 -> 2')