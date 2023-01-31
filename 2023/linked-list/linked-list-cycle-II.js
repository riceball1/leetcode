// https://leetcode.com/problems/linked-list-cycle-ii

/*
Example Inputs:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) time complexity and O(1) space
var detectCycle = function (head) {

    // uses a floyd's algo with fast and slow pointers
    let slow = head;
    let fast = head;

    // checks that fast and fast.next exists
    while (fast != null && fast.next != null) {
        // fast is always 2 steps ahead of slow
        fast = fast.next.next;
        slow = slow.next;

        // whenever fast meets slow
        // we know then there is a cycle
        if (fast == slow) {
            slow = head; // slow starts at head
            // iterate at the same time to find the
            // location of the cycle 
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;

};