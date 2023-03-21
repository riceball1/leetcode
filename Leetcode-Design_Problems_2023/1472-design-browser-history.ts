// https://leetcode.com/problems/design-browser-history/description/

class BrowserHistory {
  history: string[];
  currentIndex: number;

  constructor(homepage: string) {
    // initialize data structure to keep track of the history
    // currentIndex indicates the number of sites visited
    this.history = [homepage];
    this.currentIndex = 0;
  }

  visit(url: string): void {
    this.currentIndex++;
    // clears forwards after current index
    this.history = this.history.slice(0, this.currentIndex);
    this.history.push(url); // add the new url to the history
  }

  back(steps: number): string {
    this.currentIndex = Math.max(0, this.currentIndex - steps); // avoid out of bounds
    return this.history[this.currentIndex];
  }

  forward(steps: number): string {
    // avoid going out of bounds
    this.currentIndex = Math.min(
      this.history.length - 1,
      this.currentIndex + steps
    );
    return this.history[this.currentIndex];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

/*
ChatGPT Mar 14:

The solution provided is a reasonable implementation for a browser history class. However, there are always potential optimizations depending on the use case and specific requirements. Here are a few potential optimizations that could be considered:

Use a doubly linked list instead of an array for history storage: A doubly linked list would allow for more efficient addition and removal of elements from the history, as it does not require copying the entire array each time the history is updated. Additionally, it would allow for more efficient traversal of the history in the back and forward methods.

Implement a maximum history size: Depending on the requirements of the application, it may be desirable to limit the size of the history to a certain number of entries. This could be implemented by checking the length of the history array after each visit and removing the oldest entry if it exceeds the maximum size.

Implement lazy loading of history entries: If the application frequently loads large amounts of history entries, it may be desirable to only load the entries when they are accessed. This could be implemented by storing the history entries as a map of URLs to page contents, and only loading the contents of a page when it is accessed via the back or forward methods.

Use a circular buffer for history storage: A circular buffer would allow for more efficient addition and removal of elements from the history, as it does not require copying the entire array each time the history is updated. Additionally, it would allow for more efficient traversal of the history in the back and forward methods. However, this would require keeping track of the beginning and end of the buffer, which could add complexity to the implementation.


*/


// doubly linked list approach

class BrowserHistoryDoublyLinkedList {
    head: DoublyLinkedNode;
    tail: DoublyLinkedNode;
    current: DoublyLinkedNode;
  
    constructor(homepage: string) {
      // initialize data structure to keep track of the history
      // currentIndex indicates the number of sites visited
      this.head = new DoublyLinkedNode(homepage);
      this.tail = this.head;
      this.current = this.head;
    }
  
    visit(url: string): void {
      const newNode = new DoublyLinkedNode(url, this.current, null);
      this.current.next = newNode;
      this.current = newNode;
      this.tail = newNode;
    }
  
    back(steps: number): string {
      while (steps > 0 && this.current.prev !== null) {
        this.current = this.current.prev;
        steps--;
      }
      return this.current.value;
    }
  
    forward(steps: number): string {
      while (steps > 0 && this.current.next !== null) {
        this.current = this.current.next;
        steps--;
      }
      return this.current.value;
    }
  }
  
  class DoublyLinkedNode {
    value: string;
    prev: DoublyLinkedNode | null;
    next: DoublyLinkedNode | null;
  
    constructor(value: string, prev: DoublyLinkedNode | null = null, next: DoublyLinkedNode | null = null) {
      this.value = value;
      this.prev = prev;
      this.next = next;
    }
  }