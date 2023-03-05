// https://structy.net/problems/linked-list-find


const linkedListFind = (head, target) => {
    if(!head) return false;
    let curr = head;
    while(curr) {
      // check if target is found
      if(curr.val === target) {
        return true;
      }
      // keep iterating 
      curr = curr.next
    }
    return false;
  };