// https://structy.net/problems/get-node-value


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const getNodeValue = (head, index) => {
    if(!head) return head;
    let currIndex = 0;
    let curr = head;
    while(curr) {
      // if index matches return node value
      if(currIndex === index) {
        return curr.val;
      }
      currIndex++;
      curr = curr.next;
    }
    // if exceeds index return null
    return curr;
  };