// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Merge two sorted linked lists and return it as a sorted list. The list
 * should be made by splicing together the nodes of the first two lists.
 */

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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
  // temp_node to hold list
  let tempNode : ListNode = new ListNode();
  let currentNode : ListNode = tempNode;
  
  while(l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
          currentNode.next = l1;
          l1 = l1.next;
      } else {
          currentNode.next = l2;
          l2 = l2.next;
      }
      
      currentNode = currentNode.next;
  }
  
  // edge cases if l1 or l2 ends before the other
  if (l1 !== null) {
      currentNode.next = l1;
      
  }
  
  if (l2 !== null) {
      currentNode.next = l2;
  }
  
  return tempNode.next;

};


/**
 * Thought Process:
 * 
 * - So since the inputs have already been sorted, I was
 * thinking that I should do something where I unshift the first element
 * in each array and compare them
 * 
 * - And use an extra space complexity by creating a new array to store
 * the new sorted array
 * 
 * - But then I thought about edge case of what if 
 * there were two same elements in one of the arrays?
 * - So will need to continuously sort them, so maybe start off with first 
 * recursively breaking the problem down to only 1 element in each array
 * - so a divde and conquer approach
 * 
 * 
 */