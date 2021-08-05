// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function hasCycleFirstAttempt(head: ListNode | null): boolean {
    // handle linkedList without next val
    if (head === null) return false;
    let count = 0;
    function checkHasCycle(node) {
        console.log(node.next.val)
        count += 1;   
        if (node?.next || count === 3) return false;
         
        return checkHasCycle(node?.next) 
       
    }
    return checkHasCycle(head);
};


// After watching a video to understand
// This was a basic approach for the algo
// using comparision of two pointer values

function hasCycle(head: ListNode | null): boolean {
    // use an O(n) time complexity approach
    // use the method tortoise and hare - one fast and one slow pointer
    
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false
};