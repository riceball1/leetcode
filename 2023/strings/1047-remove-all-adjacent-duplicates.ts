// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string

const removeDuplicates = (s: string): string => {
  const stack: string[] = [];
  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
  }
  return stack.join("");
};

let s = "abbaca";
console.log(removeDuplicates(s)); // "ca"
