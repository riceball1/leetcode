// https://leetcode.com/problems/middle-of-the-linked-list


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
var middleNode = function(head) {
    // there will always be at least one node
    let fast = head;
    let slow = head;
    // move the fast one step faster than the slow
    while(fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    // the slow will be at the middle since it's one step before the fast, or half way.
    return slow
      
  };