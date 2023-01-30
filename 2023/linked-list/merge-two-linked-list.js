// https://leetcode.com/problems/merge-two-sorted-lists


/*
Iterative Approach
O(list1 + list2) run time
O(1) no extra space - unless we count the nodes
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // use a dummy node in case there is 1 in each
    let dummy = new ListNode(0)
    let curr = dummy;

    // iterate while either list has nodes
    // this is due to them being not necessary equal lengths
    while (list1 && list2) {
        // compare, and iterate the list
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        // always iterate the current
        curr = curr.next
    }
    // check if there's anything left from either lists
    // if not then it'll assign to null
    curr.next = list1 || list2;

    // return the head which is starting at dummy.next
    return dummy.next;

};


// Recursive Approach
// Time O(list1 + list2); Space - call stack O(list 1 + list2)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2;
    if(list2 === null) return list1;
    
    if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2)
      return list1;
    } else {
      list2.next = mergeTwoLists(list1, list2.next)
      return list2;
    }
  };
  
