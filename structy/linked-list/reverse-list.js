// https://structy.net/problems/reverse-list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// Time O(n) Space: O(1)
const reverseList = (head) => {
    if (!head) return null;
    const dummy = new Node('d')
    let curr = head;
    let rest = null;

    while (curr) {

        // add the curr node to the dummy.next 
        let next = dummy.next;
        dummy.next = curr; // adds the current node to the dummy.next 
        rest = curr.next; // adds whatever was previously .next to rest
        dummy.next.next = next; // adds what was already previously in dummy.next

        // update the curr node with the rest 
        curr = rest;
    }

    return dummy.next;
};

// Structy's Iterative Approach
// Time O(n), Space: O(1)
const reverseListIterative = (head) => {
    let current = head;
    let prev = null;
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// Recursive
// Time: O(n), Space: O(n) - call stack
const reverseListRecrusive = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
};