// https://leetcode.com/problems/min-stack/


//  Time O(1) Space O(1)
interface ValuePair {
    value: number;
    minValue: number;
  }
  
  class MinStack {
    private stack: ValuePair[] = [];
  
    push(value: number): void {
      // initally sets the stack with an object that contains the value and minValue starting out  
      if (this.stack.length === 0) {
        this.stack.push({ value: value, minValue: value });
        return;
      }
      // otherwise get the current minValue and compare to the current value to calculate potentially a new minValue
      const minValue = Math.min(this.getTopValuePair().minValue, value);
      // add this to the stack, so each time the top value will always have the info about the minValue
      this.stack.push({ value, minValue });
    }
  
    pop(): void {
      this.stack.pop();
    }
  
    /*
    The top() method in this code snippet returns the top value of a stack-based data structure. It does this by calling the getTopValuePair() method, which retrieves the top element of the stack and returns it as a ValuePair object. The top() method then extracts the value property of this ValuePair object and returns it as a number.
    */
    top(): number {
      return this.getTopValuePair().value;
    }
  
    getMin(): number {
      return this.getTopValuePair().minValue;
    }
  
    getTopValuePair(): ValuePair {
    // retrieves the top element of the stack, and also checks that it is not falsy
    // The ! operator is used to coerce the value at that index to a boolean, effectively checking if the value is truthy or falsy
    // alternative code: this.stack[this.stack.length - 1] ?? null
      return this.stack[this.stack.length - 1]!;
    }
  }