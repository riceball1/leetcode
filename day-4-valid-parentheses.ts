// https://leetcode.com/problems/valid-parentheses/

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 */

 function isValid(s: string): boolean {
    // create a list of already valid parens
    const validParens = ['()', '[]', '{}'];
    let isValidParen = false;
     

    return isValidParen;
};

/*
 Thoughts:
 1. We already know there are only 3 types of valid parens
 2. Must be able to check if there is an open and closing bracket for each parens
 3. We know that parens must only open and close each other, not other paren types
 4. looks like for nested parens we should be able to extract parens out

- I'm thinking that we can possibly loop through each and compare
- Imediately return false of any of the parens do not match

*/