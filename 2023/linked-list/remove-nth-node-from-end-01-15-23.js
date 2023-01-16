// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let fast = head;
    let slow = head;

    // move fast nth distance away
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // edge case where n == head
    if (!fast) {
        return slow.next;
    }

    // slow is nth distance from fast
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // deletes the appropriate node since it should now be nth from end
    slow.next = slow.next.next;

    return head;


};

/** 
 
Example Test Cases

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]
 */