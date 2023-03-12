// https://structy.net/problems/zipper-lists

/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.
*/

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }


// Time O(m or n), Space: O(1)
  const zipperListsIterative = (head1, head2) => {
    const head = head1; // use the head1 list to zip
    let tail = head;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    
    // keep iterating while either has something
    while (current1 !== null && current2 !== null) {

    // use a counter to alternate the nodes
      if (count % 2 === 0) {
        tail.next = current2;
        current2 = current2.next;
      } else {
        tail.next = current1;
        current1 = current1.next;
      }
      tail = tail.next;
      count += 1;
    }
    
    // left over from either lists should be added to end of the 
    // newly zipped list
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    
    // return the newly zipped up list
    return head;
  };
  
  const zipperListsRecursive = (head1, head2) => {
    
    // edge cases
    if(head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null)  return head1;
    

    // othrewise store next values to be iterated over recursively
    const next1 = head1.next;
    const next2 = head2.next;
    
    head1.next = head2; // set head1.next to head2
    head2.next = zipperLists(next1, next2) // then from there find if head1 has a node add that then add head2
    
    return head1; // finally return final result
    
  };
  

  



// Test Cases

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z