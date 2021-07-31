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

 function hasCycle(head: ListNode | null): boolean {
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